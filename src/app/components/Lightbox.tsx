import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4 md:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-[10000]"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X size={32} />
        </button>

        {/* Navigation - Prev */}
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 p-3 rounded-full transition-all z-[10000]"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <ChevronLeft size={48} />
        </button>

        {/* Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative max-w-full max-h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
          />
          <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white text-sm font-medium">
            Image {currentIndex + 1} of {images.length}
          </div>
        </motion.div>

        {/* Navigation - Next */}
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 p-3 rounded-full transition-all z-[10000]"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight size={48} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

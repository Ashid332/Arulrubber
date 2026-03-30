import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

export function Certificates() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const certificateImages = [
    "/images/certificate_1.png",
    "/images/certificate_2.png",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Certificates
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Lead By Quality */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left pt-2">
            <div className="flex flex-col mb-4">
              <span className="text-blue-700 font-bold text-xs tracking-widest uppercase">LEAD BY</span>
              <h3 className="text-gray-800 font-extrabold text-3xl uppercase tracking-tighter">QUALITY</h3>
            </div>
            <div className="p-4 rounded-full bg-blue-50">
              <div className="w-16 h-16 rounded-full border-4 border-blue-800 flex items-center justify-center bg-white shadow-inner">
                <span className="text-red-600 text-3xl font-black">Q</span>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-9 text-gray-600 text-[15px] leading-relaxed space-y-6">
            <p>
              To take the lead, to set the pace and to define the future calls for a certain attitude, a certain vision and a way of looking at things that breaks the average mould and fuels your drive to be the standard bearer for quality in whatever you set out to achieve.
            </p>
            <p>
              To lead, verily, calls for commitment, teamwork, a sense of worth and of course, a roll-up-your-sleeve work ethic that can get things done.
            </p>
            <p>
              At Arul Group of Companies - <span className="font-bold text-gray-800">Arul Rubbers and Arul Polymers</span> - we are defined by our leadership qualities, factors that have made us the leading name in the development and manufacture of rubber products for a wide range of industries.
            </p>
          </div>
        </div>

        {/* Certificates Gallery */}
        <div className="bg-[#003366] p-10 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {certificateImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative bg-white p-2 rounded-sm shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={src}
                    alt={`Arul Rubbers Certificate ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox 
        images={certificateImages}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={() => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % certificateImages.length : null))}
        onPrev={() => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + certificateImages.length) % certificateImages.length : null))}
      />
    </div>
  );
}

import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Lightbox } from "./Lightbox";

export function WhatWeDo() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const activities = [
    {
      title: "Dredging Hoses",
      image: "/images/dredging_hoses.png",
    },
    {
      title: "Site Rubber Lining & Projects",
      image: "/images/site_rubber_lining.png",
    },
    {
      title: "Heater Shells & Evaporators",
      image: "/images/heater_shells.png",
    },
  ];

  const news = [
    "Project Order Execution for Grasim Industries Limited (GIL) for their ...",
    "Creditable Quantity of Order for Tube Holder Plates/Sheets in INDIA &a...",
    "Start of the art R & D to support and development of diversified p...",
    "Succeeded manufacturing of high pressure (Upto 25 BAR) dredging hoses ...",
  ];

  return (
    <section className="py-16 bg-white border-b" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* What We Do Column */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-light text-gray-700 italic tracking-wide">
                What We Do?
              </h2>
            </div>
            
            <div className="relative group">
              {/* Navigation Arrows (Visual only for now matching UI) */}
              <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-400 bg-opacity-50 p-2 rounded text-white hover:bg-opacity-80 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
                <ChevronLeft size={24} />
              </button>
              <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-400 bg-opacity-50 p-2 rounded text-white hover:bg-opacity-80 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
                <ChevronRight size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="bg-[#0071BC] py-3 px-4 text-center">
                      <h3 className="text-white font-medium text-lg leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Latest News Column */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-light text-gray-700 italic tracking-wide mb-8">
              Latest News
            </h2>
            <div className="space-y-6">
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="flex gap-3 items-start group cursor-pointer"
                >
                  <div className="mt-1 flex-shrink-0 bg-red-600 rounded-full p-0.5">
                    <ChevronRight size={12} className="text-white" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-600 transition-colors">
                    {item}
                  </p>
                </motion.div>
              ))}
              
              <div className="flex justify-end mt-4">
                <a href="#" className="flex items-center text-sm font-semibold text-gray-500 hover:text-blue-700 transition-colors group">
                  Read more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox 
        images={activities.map(a => a.image)}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={() => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % activities.length : null))}
        onPrev={() => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + activities.length) % activities.length : null))}
      />
    </section>
  );
}

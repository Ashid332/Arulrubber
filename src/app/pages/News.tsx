import { motion } from "motion/react";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

export function News() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const latestNews = [
    "Project Order Execution for Grasim Industries Limited (GIL) for their Villayat project,Gujarat,INDIA [2012-2013 - 8 MSFE for high temprature(Upto 140°c) and high corrosive resistance using our special neoprene hard rubber].",
    "Creditable Quantity of Order for Tube Holder Plates/Sheets in INDIA & Abroad.",
    "Start of the art R & D to support and development of diversified products - Rubber Expansion Joints/Bellows, Rubber Hoses, FRP Lining & Moulds.",
    "Succeeded manufacturing of high pressure (Upto 25 BAR) dredging hoses for both suction and discharge appication of various sizes.",
    "Complete automation of rubber compounding and sheeting manufacturing (Arul Polymers Pvt Ltd) to avoid human errors and maintain consistency of manufacturing. For detailed information kindly visit www.arulpolymers.com."
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            News & Events
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Lead By Presence */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col pt-4"
          >
            <div className="flex flex-col mb-6 items-center lg:items-start text-center lg:text-left">
              <span className="text-[#0071BC] font-bold text-sm tracking-widest uppercase">LEAD BY</span>
              <h3 className="text-gray-800 font-extrabold text-4xl uppercase tracking-tighter">PRESENCE</h3>
            </div>
            
            <div className="flex justify-center lg:justify-start mb-8 w-full">
              {/* Custom SVG logo mimicking the red globe with blue stand */}
              <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-sm">
                {/* Globe Stand */}
                <path d="M 20 80 Q 50 100 80 80 L 70 80 Q 50 90 30 80 Z" fill="#0071BC" />
                <path d="M 50 85 L 50 70 M 20 50 A 35 35 0 0 0 80 50" fill="none" stroke="#0071BC" strokeWidth="4" />
                <path d="M 15 50 L 25 50 M 75 50 L 85 50" fill="none" stroke="#0071BC" strokeWidth="4" />
                <path d="M 40 90 L 60 90" fill="none" stroke="#0071BC" strokeWidth="4" />
                {/* Red Globe */}
                <circle cx="50" cy="40" r="28" fill="#E31837" />
                {/* Abstract continents in white */}
                <path d="M 35 25 Q 45 35 35 45 Q 25 35 35 25 Z" fill="white" />
                <path d="M 55 35 Q 70 40 60 55 Q 50 45 55 35 Z" fill="white" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: Text Content and Events */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 pt-4 lg:pt-0"
          >
            {/* Latest News Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-light text-gray-800 mb-8 tracking-wide">
                Latest <span className="font-medium text-[#0071BC]">News</span>
              </h2>
              
              <ul className="space-y-6">
                {latestNews.map((news, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      {/* Red circle with white arrow */}
                      <svg width="20" height="20" viewBox="0 0 24 24" className="text-red-500 transform group-hover:translate-x-1 transition-transform">
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                        <path d="M10 8l4 4-4 4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-[15px] leading-relaxed">
                      {/* Render link separately if it's the last item */}
                      {idx === 4 ? (
                        <>
                          Complete automation of rubber compounding and sheeting manufacturing (Arul Polymers Pvt Ltd) to avoid human errors and maintain consistency of manufacturing. For detailed information kindly visit <a href="http://www.arulpolymers.com" target="_blank" rel="noopener noreferrer" className="text-[#0071BC] hover:underline">www.arulpolymers.com</a>.
                        </>
                      ) : (
                        news
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Events Section */}
            <div>
              <h2 className="text-2xl font-light text-gray-800 mb-8 tracking-wide underline decoration-[#0071BC] decoration-2 underline-offset-8">
                Latest <span className="font-medium text-[#0071BC]">Events</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="overflow-hidden rounded-sm border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group aspect-[4/3] bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img 
                      src={`/images/news/event_${idx + 1}.png`} 
                      alt={`Event ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
      <Lightbox 
        images={Array.from({ length: 4 }).map((_, idx) => `/images/news/event_${idx + 1}.png`)}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={() => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % 4 : null))}
        onPrev={() => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + 4) % 4 : null))}
      />
    </div>
  );
}

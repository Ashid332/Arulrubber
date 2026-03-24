import { motion } from "motion/react";
import { Factory, CheckSquare, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

export function Facilities() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const equipmentData = [
    { name: "Heavy duty Lathes", count: 3 },
    { name: "Auto Claves (4m and 2-3 m diameter)", count: 2 },
    { name: "Shot Blasting Chamber (6m x 14m) HMT Radial Drilling Machine", count: 4 },
    { name: "Boilers", count: 3 },
    { name: "60 HP and 70 HP", count: 2 },
    { name: "Cranes & Hoists", count: 7 },
    { name: "Rubber Hose manufacturing machines", count: 3 },
    { name: "Dredge Hose Manufacturing Machine", count: 2 },
    { name: "Bunk Machine for Pipe Lining", count: 1 },
    { name: "Welding machine (Tig/Arc and Co2)", count: 10 },
    { name: "Kneader (35 and 75 ltrs)", count: 2 },
    { name: "Mixing mill", count: 2 },
    { name: "Calendaring Machine", count: 1 },
    { name: "Doubling Press", count: 2 },
    { name: "Extruder", count: 1 },
    { name: "Bench Press and Bench Grinders", count: 3 }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Facilities
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Lead By Facilities */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col pt-4"
          >
            <div className="flex flex-col mb-6 items-center lg:items-start text-center lg:text-left">
              <span className="text-[#0071BC] font-bold text-sm tracking-widest uppercase">LEAD BY</span>
              <h3 className="text-gray-800 font-extrabold text-4xl uppercase tracking-tighter">FACILITIES</h3>
            </div>
            
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                 {/* Decorative interpretation of the logo from the screenshot */}
                 <div className="w-24 h-24 bg-blue-600 rounded-sm relative z-10"></div>
                 <div className="w-16 h-16 bg-red-600 rounded-sm absolute bottom-0 -right-8 z-20 flex justify-center space-x-2 pt-2">
                    <div className="w-2 h-4 bg-white"></div>
                    <div className="w-2 h-4 bg-white"></div>
                 </div>
                 <div className="w-12 h-16 bg-[#0071BC] rounded-sm absolute top-0 -left-6 z-0"></div>
              </div>
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed text-center lg:text-left">
              Apart from this, we have made major investments in testing facilities and R&D as it forms the back bone of all our endeavours. To ensure that we are able to execute projects as per the customer's requirements, we have made certain that we are fully equipped with all the necessary infrastructure.
            </p>
          </motion.div>

          {/* Right Column: Text Content and Lists */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-8 text-gray-600 text-[15px] leading-relaxed"
          >
            <p className="text-gray-600">
              Our manufacturing facilities showcase the very best in the field. Constant up gradation of technologies and processes ensure that we always stay on the cutting edge.
            </p>

            {/* In House Section */}
            <div>
              <h3 className="text-xl font-normal text-gray-800 mb-6 tracking-wide">
                Everything Is In House And Ship Shape. These Include:
              </h3>
              <ul className="space-y-4">
                {[
                  "Rubber Compounding using Kneader Machine & Sheeting Using Two Roll Mixing Mill, Three Roll Calendering Machine",
                  "Heavy plate bending. Plate rolling. Heavy duty drilling machines, Lathe machines and all necessary instruments & machineries for fabrication.",
                  "Hydraulic presses and hose manufacturing facilities",
                  "Shot blasting chamber, Rubber lining shed, Autoclaves for Pressure curing, Boilers and Compressors",
                  "All Handling cranes necessary for Rubber lining, finishing and painting"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckSquare className="text-red-500 mr-3 mt-1 flex-shrink-0" size={18} fill="#ef4444" color="white" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment Table */}
            <div className="pt-4">
              <h3 className="text-xl font-normal text-gray-800 mb-6 tracking-wide">
                We Have The Following Equipments In House:
              </h3>
              <div className="overflow-x-auto rounded-sm border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0071BC]">
                      <th className="px-6 py-4 text-white font-bold text-sm tracking-wide">Equipment</th>
                      <th className="px-6 py-4 text-white font-bold text-sm tracking-wide border-l border-blue-400 w-32 text-center">No.s</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {equipmentData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-blue-50 transition-colors"}>
                        <td className="px-6 py-4 text-gray-600 text-sm border-r border-gray-100">{row.name}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm font-medium text-center">{row.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Facilities Image Section */}
            <div className="pt-8">
              <h3 className="text-xl font-normal text-gray-800 mb-6 tracking-wide underline decoration-red-500 decoration-2 underline-offset-8">
                Facilities:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 21 }).map((_, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="overflow-hidden rounded-sm border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group aspect-[4/3] bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img 
                      src={`/images/facilities/fac_${idx + 1}.png`} 
                      alt={`Facility ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <Lightbox 
              images={Array.from({ length: 21 }).map((_, idx) => `/images/facilities/fac_${idx + 1}.png`)}
              currentIndex={selectedImageIndex}
              onClose={() => setSelectedImageIndex(null)}
              onNext={() => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % 21 : null))}
              onPrev={() => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + 21) % 21 : null))}
            />

          </motion.div>
        </div>
      </div>
    </div>
  );
}

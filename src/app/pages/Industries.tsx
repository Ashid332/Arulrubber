import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

export function Industries() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const tableData = [
    {
      industry: "Chemical Industry",
      application: "Process Tanks & Vessels, Pipes & Fittings, Chlorine Plants, Agitators, Gas Scrubbers, Pump Housing, Ventilation Systems, Pressure & Reaction Vessels etc."
    },
    {
      industry: "Water & Waste Treatment Plant / Desalination Plant",
      application: "Reaction Towers, Anion & Cation Exchangers, Filter Vessels, Agitator Blades, Centrifuges, Tanks etc."
    },
    {
      industry: "Waste Incinerators",
      application: "Flue Gas De-sulphuration Systems, Vessels & Tanks, Pipes & Fittings etc."
    },
    {
      industry: "Storage and Transportation of Chemicals",
      application: "Mobile Tanks, Containers for Road and Rail etc."
    },
    {
      industry: "Metallurgical Industries",
      application: "CS, SS Vessels, Leaching & Purification Process Vessels, Concrete RL & 3L Thickener"
    },
    {
      industry: "Electroplating Industries",
      application: "Baths, Racks, Filter Vessels, Settling Tanks, Scouring Barrels etc."
    },
    {
      industry: "Phosphoric Acid & Fertilizers Industries",
      application: "Fume Stack, Tail Gas Scrubber, Granular, Phosphoric Acid Storage Tank etc."
    },
    {
      industry: "Caustic Soda & Chlorine Industries",
      application: "Tanks, Ion Exchange Column, Absorber, Tower Sump etc."
    },
    {
      industry: "Food & Beverage Industry",
      application: "Ion Exchange Columns, Dechlorination Columns, Lime Stone Storage Filters etc."
    },
    {
      industry: "Pharmaceutical Industry",
      application: "Centrifuges, Reactors, Condensers etc."
    },
    {
      industry: "Dredging Industry",
      application: "River and Sea Dredgers with rubber dredging hoses for suction and delivery."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Industries
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Lead By Presence */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left pt-4"
          >
            <div className="flex flex-col mb-4">
              <span className="text-blue-700 font-bold text-xs tracking-widest uppercase">LEAD BY</span>
              <h3 className="text-gray-800 font-extrabold text-4xl uppercase tracking-tighter">PRESENCE</h3>
            </div>
            <div className="p-6 rounded-full bg-blue-50">
              <Globe size={80} className="text-red-500" />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-gray-600 text-[15px] leading-relaxed"
          >
            <p>
              Corrosion and Abrasion cause damages worth Billions of Rupees in the Industry. Our Corrosion and Abrasion Resistant Rubber Lining prevents such damage which results in sizable savings throughout the Industry. Our presence not just in India but across the globe is a measure of our standing in this field. We are specialist in supply of all MSRL Equipment for Multi-Stage Fusion Evaporator(MSFE) Projects' and we have executed major projects for Staple Fibre and Viscose Rayon Manufactures in India, Thailand and Indonesia. So far, we have supplied more than 800 Tube Holder Plates, 300 Evaporators, 300 Re-Boilers and 700 Dish Ends for Re-Boilers. These are the equipment used in Spin Bath application to with stand very high temperatures of 130 deg."C".
            </p>
            <p>
              We are the most successful Rubber Liner in India especially for MSFE Equipment like Re-Boilers, Tube Plates and Evaporators to withstand temperatures up to 130 Degree Celsius. We have served all the Staple Fibre Viscose Rayon Plants in India and also in Thailand and Indonesia.
            </p>
            <p>
              For than a decade, backed by constant R&D, we have established our presence in site rubber lining in industries as diverse as fertilizer process plants, chloro alkali and caustic soda plants among other chemical industries.
            </p>
            <p>
              Another area where we have brought our expertise to bear is by serving sea and river dredgers with our rubber dredging hoses, expansion joints/bellows that can withstand up to 25Kg working pressure of all sizes. We also manufacture and supply Tanks, Vessels, Pipes & Fittings, Sand Filters, Agitators, Outlet Boxes, Heater Shells etc.
            </p>
            <p>
              We have done site Rubber Lining of Phosphoric Acid Tanks, DM Water Tanks, Slurry Tanks, Launders, Chutes etc.
            </p>
          </motion.div>
        </div>

        {/* Table Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-gray-600 mb-6 tracking-tight">
            Industries Where We Have Established Our Brand Of Excellence:
          </h2>
          <div className="overflow-x-auto rounded-sm border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0071BC]">
                  <th className="px-6 py-4 text-white font-bold uppercase text-sm border-r border-blue-400 w-1/3">Industry</th>
                  <th className="px-6 py-4 text-white font-bold uppercase text-sm">Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-blue-50 transition-colors"}>
                    <td className="px-6 py-4 text-gray-700 text-sm font-medium border-r border-gray-100">{row.industry}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expansion Plans */}
        <div className="mb-16">
          <p className="text-gray-700 text-base leading-relaxed font-medium pb-4">
            As a part of our Expansion Plans, we have also begun the manufacturing of Acid Transfer Rubber Hoses, Dredging (Suction & Discharge) Hoses, Rubber Expansion Joints / Bellows and other moulded rubber components.
          </p>
          <div className="h-px bg-gray-200 w-full"></div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-light text-gray-800 mb-8 uppercase tracking-wide">Our Projects:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 15 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-sm overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow bg-white aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={`/images/industries/project_${index + 1}.png`}
                  alt={`Arul Rubbers Project ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Lightbox 
        images={Array.from({ length: 15 }).map((_, idx) => `/images/industries/project_${idx + 1}.png`)}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={() => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % 15 : null))}
        onPrev={() => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + 15) % 15 : null))}
      />
    </div>
  );
}

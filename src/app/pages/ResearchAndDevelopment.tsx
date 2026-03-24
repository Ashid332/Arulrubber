import { motion } from "motion/react";
import { BarChart, Search, CheckSquare } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

export function ResearchAndDevelopment() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const equipmentTestings = [
    { no: 1, name: "UTM Machine", type: "Tensile strength\nM odulus\n% Elongation\nTear strength\nStrength etc" },
    { no: 2, name: "RheoMeter", type: "Rheological properties & cure char acter of the Compound" },
    { no: 3, name: "Mooney Viscometer", type: "Viscosity of compounds & polymers" },
    { no: 4, name: "Shore A & D", type: "Hardness testing" },
    { no: 5, name: "DIN Abrasion", type: "Abrasion properties of the compound & product" },
    { no: 6, name: "Hot Air Oven Heat ageing etc", type: "Moisture content, Solid content" },
    { no: 7, name: "Muffle Furnace", type: "Ash content of the Raw materials & Compound." },
    { no: 8, name: "Density Meter", type: "Specific gravity of the compound, Rubber" },
    { no: 9, name: "Melting Point Apparatus", type: "Melting point of the Raw materials" },
    { no: 10, name: "Softening Point Apparatus", type: "Softening Point of the Raw materials" },
    { no: 11, name: "Spark Tester", type: "Used to found the leakage in the Product" },
    { no: 12, name: "Flash Point Apparatus", type: "Used to check the Flash point & fire point of the Processing oils" }
  ];

  const chemicalTestings = [
    { no: 1, name: "Purity Test", on: "Raw materials Like Zno, Caco3 etc.," },
    { no: 2, name: "Iodine Value", on: "Carbon Black" },
    { no: 3, name: "DBP Absorption", on: "Carbon Black" },
    { no: 4, name: "Acid Value", on: "Raw materials" },
    { no: 5, name: "Bulk Density/Pore Density", on: "For Fillers like clay & carbon black etc.," },
    { no: 6, name: "Solubility test", on: "Raw Materials" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Research and Development
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Lead By Research */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col pt-4"
          >
            <div className="flex flex-col mb-6 items-center lg:items-start text-center lg:text-left">
              <span className="text-[#0071BC] font-bold text-sm tracking-widest uppercase">LEAD BY</span>
              <h3 className="text-gray-800 font-extrabold text-4xl uppercase tracking-tighter">RESEARCH</h3>
            </div>
            
            <div className="flex justify-center lg:justify-start mb-8 relative h-32 w-full lg:w-48">
              {/* Custom SVG composition mimicking the screenshot logo */}
              <div className="absolute top-0 left-8">
                <BarChart size={80} strokeWidth={2.5} className="text-[#0071BC]" />
                <div className="absolute w-20 h-2 bg-[#0071BC] bottom-[-4px] left-0 rounded-full"></div>
              </div>
              <div className="absolute bottom-2 right-12 lg:-right-4 bg-white rounded-full p-1 border-4 border-white shadow-sm">
                 <Search size={50} strokeWidth={3} className="text-red-600" />
              </div>
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed text-center lg:text-left">
              At the heart of all our efforts is innovation facilitated by investments in cutting edge research facilities. Also to ensure that the finest quality parameters are met, we go that extra mile to put every single product through intensive testing. Constant upgrading of facilities is also another factor that helps us stay relevant at all times and meet customer expectations to their fullest satisfaction.
            </p>
          </motion.div>

          {/* Right Column: Text Content and Lists */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-gray-600 text-[15px] leading-relaxed"
          >
            <p className="text-gray-600">
              Our R & D facilities include state of art testing equipment and testing machines that are regularly maintained and calibrated. Various testing procedures are carried out from raw material stage to the final products with these testing facilities.
            </p>
            <p className="text-gray-600">
              These tests includes Mooney Viscosity, Rheological properties, Hardness, Tensile strength, Elongation, Abrasion Resistance, Tear strength, Peel strength, chemical analysis, compression set, purity test, melting point etc.
            </p>
            <p className="text-gray-600">
              All the tests are carried out by IS, ASTM, DIN or the customer requirement by qualified and experienced personnel.
            </p>
            <p className="text-gray-600">
              We have developed various compounds for the hardness ranging from 35 – 100 shore A & 35 to 90 shore D, using a wide range of polymers such as NR, SBR, Nitrile, NBR + PVC, Silicone, Viton, EPDM, Hypalon.
            </p>
            <p className="text-gray-600">
              Our recent development is Ultra high Heat Resistance EPDM conveyor cover compound, which can withstand temperatures of 180 C continuously.
            </p>

            {/* R&D Highlights Section */}
            <div className="pt-4">
              <h3 className="text-xl font-normal text-gray-800 mb-6 tracking-wide">
                R & D Highlights:
              </h3>
              <ul className="space-y-4">
                {[
                  "We recently developed ultra high heat resistance EPDM cover compound & skim compound which can with stand upto 180 C",
                  "Silicone Food Grade compound developed as per the German Standard",
                  "EPDM compound developed for the butterfly valve application"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckSquare className="text-red-500 mr-3 mt-1 flex-shrink-0" size={18} fill="#ef4444" color="white" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment Table */}
            <div className="pt-8">
              <div className="overflow-x-auto rounded-sm border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0071BC]">
                      <th className="px-6 py-4 text-white font-bold text-sm tracking-wide w-20 text-center border-r border-blue-400">S.No.</th>
                      <th className="px-6 py-4 text-white font-bold text-sm tracking-wide border-r border-blue-400">Equipments</th>
                      <th className="px-6 py-4 text-white font-bold text-sm tracking-wide">Type of Testing Carried Out</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {equipmentTestings.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-blue-50 transition-colors"}>
                         <td className="px-6 py-4 text-gray-500 text-sm text-center border-r border-gray-100">{row.no}</td>
                         <td className="px-6 py-4 text-gray-600 text-sm font-medium border-r border-gray-100">{row.name}</td>
                         <td className="px-6 py-4 text-gray-600 text-sm whitespace-pre-line">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Chemical Testing Table */}
            <div className="pt-8">
              <div className="overflow-x-auto rounded-sm border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0071BC]">
                      <th className="px-6 py-4 text-white font-bold text-sm tracking-wide w-20 text-center border-r border-blue-400">S.No.</th>
                      <th className="px-6 py-4 text-white font-bold text-sm tracking-wide border-r border-blue-400">Chemical Testing</th>
                      <th className="px-6 py-4 text-white font-bold text-sm tracking-wide">Testing Carried Out On</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {chemicalTestings.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-blue-50 transition-colors"}>
                         <td className="px-6 py-4 text-gray-500 text-sm text-center border-r border-gray-100">{row.no}</td>
                         <td className="px-6 py-4 text-gray-600 text-sm font-medium border-r border-gray-100">{row.name}</td>
                         <td className="px-6 py-4 text-gray-600 text-sm whitespace-pre-line">{row.on}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* R & D Facilities Image Section */}
            <div className="pt-8">
              <h3 className="text-xl font-normal text-gray-800 mb-6 tracking-wide underline decoration-red-500 decoration-2 underline-offset-8">
                R & D Facilities:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 7 }).map((_, idx) => (
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
                      src={`/images/randd/rd_${idx + 1}.png`} 
                      alt={`R&D Facility ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <Lightbox 
              images={Array.from({ length: 7 }).map((_, idx) => `/images/randd/rd_${idx + 1}.png`)}
              currentIndex={selectedImageIndex}
              onClose={() => setSelectedImageIndex(null)}
              onNext={() => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % 7 : null))}
              onPrev={() => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + 7) % 7 : null))}
            />

          </motion.div>
        </div>
      </div>
    </div>
  );
}

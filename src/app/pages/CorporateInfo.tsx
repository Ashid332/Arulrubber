import { motion } from "motion/react";
import { ChevronRight, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

export function CorporateInfo() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images = ["/images/factory_building.png"];
  const industries = [
    "Staple Fibre Viscose Rayon Manufacturing Industries",
    "Fertilizer Industries",
    "Chloro alkali and Caustic soda Industries",
    "Acid and Chemical Industries",
    "Water Treatment Plants",
    "Mining and Mineral Industries",
    "Bulk Material Handling Industries",
    "Desalination Plants",
    "Steel Industries",
    "Paper Mills & Cement Plants",
    "Power Plants",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Corporate Info
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-600 mb-4 tracking-tight">
            Arul Rubbers
          </h2>
          <div className="h-px bg-gray-200 w-full mb-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div 
                className="rounded-sm overflow-hidden shadow-lg border border-gray-100 cursor-pointer"
                onClick={() => setSelectedImageIndex(0)}
              >
                <img 
                  src="/images/factory_building.png" 
                  alt="Arul Rubbers Factory Building" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-medium italic border-l-4 border-blue-600 pl-4 py-2">
                We are the Most Successful Rubber Liner In INDIA Specially for MSFE Equipments like ReBoilers,Tube Plates and Evaporators to Withstand up to 130 Deg Celsius Temperature and have received Various Commendations from from Almost all the Staple Fibre Viscose Rayon Plants in INDIA, THAILAND AND INDONESIA.
              </p>
            </motion.div>

            {/* Right Column: Text */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-600 text-[15px] leading-relaxed"
            >
              <p>
                Since inception, some four decades back, we have steadily grown to reach the position of eminence we hold today because our founder <span className="font-bold text-gray-800">Mr.V.Vajravel</span> envisioned a future where we would hold sway and define the new direction in whatever we set out to do.
              </p>
              <p>
                Today, we are the leading name in the area of rubber lining in the country, bringing our brand of expertise across a wide spectrum of industries. In fact, our area of competence extends beyond rubber lining and includes fabrication of tanks, vessels, pipes and fittings, outlet boxes, heater shells, tube holder plates, dished ends, evaporators, rollers, pulleys, gaskets and moulded components. We have also carried out various site rubber lining of phosphoric acid storage tanks, DM water tanks, HCL acid storage tanks etc., apart from specific services for the mining industry.
              </p>
              <p>
                Formed in the year 1978, we have since then, gone on to become India's foremost Rubber Lining Companies. We are <span className="font-bold text-gray-800 uppercase italic">located in HOSUR</span>, which is about 300 kms from Chennai Port and 40 kms from Bangalore. We are situated on the National Highway and have easy access to all parts of the Country. And the proximity to the Chennai Port gives us access to the Globe.
              </p>
              <p>
                We are a company that truly believes that our service is what separates us from our competition. All of our efforts are undertaken keeping our mission statement in mind which is to deliver complete customer satisfaction. Our strong team of dedicated Engineers and Technicians are committed to quality processes while simultaneously safeguarding environmental conditions. With such a great workforce,Arul Rubbers has emerged as one of the undisputed leader in the business of fabrication and rubber lining.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 pt-16 border-t border-gray-100">
          {/* Lead By Vision (Left) */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-blue-700 font-bold text-xs tracking-widest uppercase">LEAD BY</span>
                <h3 className="text-gray-800 font-extrabold text-3xl uppercase tracking-tighter">VISION</h3>
              </div>
              <div className="p-4 rounded-full bg-blue-50 ml-4">
                <Lightbulb size={40} className="text-red-500" />
              </div>
            </div>
            
            <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed max-w-lg">
              <p>
                At Arul Rubbers, we endeavor to achieve customer satisfaction through effective product realization with continual feedback from our clients. In fact, the company's entire business strategy is designed to ensure that the customer drives Arul Rubber's operations and goals.
              </p>
              <p>
                To take the lead, to set the pace and to define the future calls for a certain attitude, a certain vision and a way of looking at things that breaks the average mould and fuels your drive to be the standard bearer for quality in whatever you set out to achieve.
              </p>
              <p>
                To lead, verily, calls for commitment, teamwork, a sense of worth and of course, a roll-up-your-sleeve work ethic that can get things done.
              </p>
              <p className="font-medium">
                At Arul Rubbers, we are defined by our leadership qualities, factors that have made us the leading name in the development and manufacture of rubber products for a wide range of industries.
              </p>
            </div>
          </div>

          {/* Core Industries (Right) */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
            <h3 className="text-xl font-medium text-gray-800 mb-8 border-b border-gray-200 pb-4">
              We Cater Anti-Corrosion & Anti-Abrasion Resistant Rubber Lining Solutions For The Following Core Industries:
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0 bg-red-600 rounded-full p-0.5">
                    <ChevronRight size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium group-hover:text-blue-700 transition-colors">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Lightbox 
        images={images}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={() => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))}
        onPrev={() => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))}
      />
    </div>
  );
}

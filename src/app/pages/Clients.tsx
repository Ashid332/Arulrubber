import { motion } from "motion/react";
import { Globe2, MapPin, Building2 } from "lucide-react";

export function Clients() {
  const internationalClients = [
    "M/S. P.T.Indo Bharath Rayon, Jakarta, Indonesia",
    "M/S. P.T. South Pacific Viscose, Jakarta, Indonesia",
    "M/S. Thai Rayon Public Co.Ltd., Bangkok, Thailand",
    "M/S. Karnaphuli Fertilizer Company Ltd, Bangladesh",
    "M/S. Samuda Chemicals, Bangaladesh",
    "M/S. Tasnim Chemicals, Bangaladesh",
    "M/S. PT Polyline Technologies, Indonesia"
  ];

  const domesticClients = [
    "Aditya Birla Nuvo Limited, Veraval, Gujarat",
    "Adithya Birla Chemicals, Karwar, Karnataka",
    "Andra Sugars Limited, Kovvur, Andra Pradesh",
    "BATEMAN Engineering (India) Pvt.Ltd., Bangalore, Karnataka",
    "Birla Cellulosic Limited, Kosamba, Gujarat",
    "BGR Energy Systems India Ltd, Chennai, Tamilnadu",
    "Chemplast Sanmar Limited, Chennai, Tamilnadu",
    "Coromandel International Limited, Vishakapatnam, Andra Pradesh",
    "Century Rayons, Shahad",
    "Chemfab Alkalies Ltd, Pondicherry",
    "DCW Limited, Tamilnadu",
    "Delkor Technik India Pvt.Ltd., Bangalore, Karnataka",
    "Essar Steels- Mumbai",
    "FACT Engineering Works, Kochi, Kerala",
    "Godavari Fertilizers And Chemicals, Kakkinada, Andra Pradesh",
    "Grasim Industries Ltd., Stable Fibre Division, Nagda, Madhya Pradesh",
    "Grasim Industries Ltd., Graslene Division, Harihar, Karnataka",
    "Grasim Industries Ltd, Cellulosic Division, Villayat",
    "Grasim Industries Ltd, Chemical Division, Nagda (M.P)",
    "Green Star Fertilizers Ltd (Formerly SPIC Ltd), Tuticorin, Tamilnadu",
    "GEA-BGR Energy Systems India Ltd, Pannangadu, Nellore,(A.P)",
    "Hukumchand Jute Mills Limited, Amlai, Madhya Pradesh",
    "Indian Rare Earths Limited, Manavallakurichi, Tamilnadu",
    "Ion Exchange (India) Limited, Hosur, Tamilnadu",
    "Kanoria Chemicals And Industries Ltd., Renukoot, Uttar Pradesh",
    "Kerala Minerals And Metals Limited, Kerala",
    "KALI BMH Systems (P) Ltd, Chennai",
    "Kudremukh Iron Ore Company Limited, Mangalore, Karnataka",
    "LANXESS India Pvt.Ltd, Nagda (M.P)",
    "McNally Sayaji Engineering Ltd, Mallur, Karnataka",
    "Paradeep Phosphates Ltd., Orissa",
    "PROGEN Systems & Technologies Ltd, Chennai",
    "Reliance Industries Ltd, Dahej",
    "Rollwell Conveyor Component Pvt. Ltd. Hindupur",
    "SIMON India Ltd, New Delhi",
    "Sparkon Engineering, Pune",
    "Sree Rayalaseema Alkalies And Chemicals Limited, Kurnool, Andra Pradesh",
    "Steel Authority Of India Ltd (SAIL-RSP), Rourkela",
    "Sterlite Industries India Ltd, Tuticorin",
    "Travancore Titanium Products Limited, Trivandrum, Kerala",
    "Travancore - Cochin Chemicals Limited, Kochi, Kerala",
    "Walchand Nagar Industries, Pune"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Clients
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Lead by Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Lead By Relationship */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col pt-4"
          >
            <div className="flex flex-col mb-6 items-center lg:items-start text-center lg:text-left">
              <span className="text-[#0071BC] font-bold text-sm tracking-widest uppercase">LEAD BY</span>
              <h3 className="text-gray-800 font-extrabold text-4xl uppercase tracking-tighter">RELATIONSHIP</h3>
            </div>
            
            <div className="flex justify-center lg:justify-start mb-8 w-full">
              {/* Custom SVG logo mimicking the interconnected relationship graphic */}
              <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-sm">
                {/* Blue Person Left */}
                <circle cx="28" cy="30" r="10" fill="#0071BC" />
                <path d="M 45 60 C 45 40, 10 40, 10 60 L 10 75 C 10 80, 45 80, 45 75 Z" fill="#0071BC" />
                {/* Red Person Right */}
                <circle cx="72" cy="70" r="10" fill="#E31837" />
                <path d="M 55 40 C 55 60, 90 60, 90 40 L 90 25 C 90 20, 55 20, 55 25 Z" fill="#E31837" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-gray-600 text-[15px] leading-relaxed pt-4 lg:pt-0"
          >
            <p>
              The customer comes first. This is a dictum that has been ingrained in us from day one. We are committed to a customer- centric approach and believe that our success can only be measured by that of our customer's. It is this commitment that allows us to provide innovative solutions that measures up to the demands of the market.
            </p>
            <p>
              Our service is spot on and is what separates us from our competition. Our strong team of dedicated Engineers and Technicians are committed to quality processes while simultaneously safeguarding environmental conditions.
            </p>
            <p>
              We endeavour to achieve customer satisfaction through effective product realization with continual feedback from our clients. In fact, the company's entire business strategy is designed to ensure that the customer drives our operations and goals.
            </p>
          </motion.div>
        </div>

        <div className="h-px bg-gray-200 w-full mb-16"></div>

        {/* International Clients Section */}
        <div className="mb-20">
          <div className="flex items-center mb-10">
            <Globe2 className="text-[#0071BC] mr-4" size={32} />
            <h2 className="text-3xl font-light text-gray-800 tracking-wide">
              A Few Of Our <span className="font-medium text-[#0071BC]">International</span> Clients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalClients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-gray-50 rounded-md p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="text-[#0071BC] text-sm font-bold mb-3 opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{client}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Domestic Clients Section */}
        <div className="mb-12">
          <div className="flex items-center mb-10 bg-gray-50 p-6 rounded-md border-l-4 border-red-500">
            <Building2 className="text-red-500 mr-4" size={32} />
            <h2 className="text-3xl font-light text-gray-800 tracking-wide">
              A Few Of Our <span className="font-medium text-red-500">Domestic</span> Clients
            </h2>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-4">
            {domesticClients.map((client, idx) => (
              <div 
                key={idx} 
                className="flex items-start break-inside-avoid bg-white p-3 rounded hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
              >
                <MapPin className="text-gray-400 mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-medium text-gray-400 mr-2">{idx + 1}.</span> 
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

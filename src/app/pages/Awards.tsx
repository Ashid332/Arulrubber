import { motion } from "motion/react";
import { Trophy } from "lucide-react";

export function Awards() {
  const awardsList = [
    {
      year: "2012",
      description: "Asia Pacific International Award for Manufacture Development from Global Achievers Foundation, New Delhi"
    },
    {
      year: "2011-2012",
      description: "Rashtriya Udyog Ratan Award from Indian Organization for Business Research & Development, Delhi"
    },
    {
      year: "2009",
      description: "AIRIA (All India Rubber Industries Association) Export Merit Award"
    },
    {
      year: "2008",
      description: "Noble Ratan Shree Award from Indian Organization for Business Research & Development [IOBRD]"
    },
    {
      year: "2007",
      description: "International Study Circle for Business Excellence Award"
    },
    {
      year: "2006",
      description: [
        "AIRIA (All India Rubber Industries Association) Export Merit Award. Udyog Bharathi Award to Mr. Vajravel - Managing Director for Outstanding Achievements in Business Excellence and Quality Achievements",
        "All India Business & Community Foundation Award for Quality Excellence"
      ]
    },
    {
      year: "2005",
      description: [
        "AIRIA (All India Rubber Industries Association) Export Merit Award",
        "Award for Excellence in Export of Rubber Lined Equipments from AIRIA"
      ]
    },
    {
      year: "2003-2004",
      description: "AIRIA Export Merit Award for Excellence in Export of Rubber Lined Equipments & Gaskets"
    },
    {
      year: "1999",
      description: "Export Award from Small Scale Unit"
    },
    {
      year: "1998",
      description: "AIRIA Export Merit Award for Excellence in Exports of Rubber Lined Equipments"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Awards
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Lead By Recognition */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col mb-4">
              <span className="text-blue-700 font-bold text-xs tracking-widest uppercase">LEAD BY</span>
              <h3 className="text-gray-800 font-extrabold text-3xl uppercase tracking-tighter">RECOGNITION</h3>
            </div>
            
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-red-600 stroke-[1.5]" />
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed italic">
              "Over the years our efforts have won recognition across the globe and we believe that when you have a good thing going honours are bound to come your way."
            </p>
          </div>

          {/* Right: Awards List */}
          <div className="lg:col-span-8 space-y-4">
            {awardsList.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start group"
              >
                <div className="w-24 flex-shrink-0 pt-4 text-right pr-6">
                  <span className="text-gray-500 font-medium text-sm">{award.year}</span>
                </div>
                
                <div className="flex-grow bg-gray-50 p-6 rounded-r-lg border-l-4 border-blue-600 relative">
                  {/* Decorative triangle arrow */}
                  <div className="absolute top-4 -left-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-blue-600" />
                  
                  {Array.isArray(award.description) ? (
                    <div className="space-y-4">
                      {award.description.map((desc, i) => (
                        <p key={i} className="text-gray-700 text-sm leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

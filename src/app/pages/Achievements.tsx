import { motion } from "motion/react";
import { Globe, CheckCircle2 } from "lucide-react";

export function Achievements() {
  const achievements = [
    "We received appreciation and commendation for completing rubber lining at site for phosphoric acid tank for fact - cochin, february 2012 for timely delivery and completion of work successfully.",
    "We have manufactured and delivered msrl ductings for dap trains 4 nos to paradeep phosphates limited, orissa for their total expansion, april 2011.",
    "We received appreciation for completing rubber lining at site for phosphoric acid tank for fact (few) - cochin, may 2010. for timely delivery and completion of work successfully.",
    "Manufacturing and supply of msrl msfe equipments for pt.spv, indonesia line 4 expansion project, 2009. our supply received appreciation for quality of work and timely delivery.",
    "Manufacturing and supply of msrl msfe equipments for pt.spv, indonesia pco 6 expansion project, 2008. our quality of work and on time delivery received accolades from spv.",
    "P.T. Indo - Bharat Rayon, jakarta, indonesia commended our supply of msrl msfe equipments for their spinning line 4 project in the year 2007.",
    "Thai rayon public company limited, bangkok, thailand acknowledged our timely delivery and service for our supply of msfe equipments for their new line expansion, august 2006.",
    "P.T. Indo - Bharat Rayon, jakarta, indonesia acknowledged our quality, service, and on time delivery for supply of msfe equipments for their new line expansion, december 2005.",
    "We earned accolade and further work from south pacific viscose, jakarta, indonesia may 2003, with the flawless supply and servicing of items for the multistage evaporator plant suitable for high end spin bath solutions. the items included evaporators, heaters, tube sheets, dish ends and vessels.",
    "P.T. Indo - Bharat Rayon, jakarta, indonesia highly appreciated and acknowledged our supply, service, and timely delivery of msfe equipments for their expansion project, april 2003.",
    "We have successfully carried out fabrication and rubberlining work for jayshree chemicals limited, india june 2002. the work included the supply of primary cell components, mercury inlet box, brine inlet box, brine outlet box, vertical decomposers, primary cell covers, troughs and vacuum degassifier msrl pipes.",
    "Dcw limited, india june 2000, accredited the quality services by arul rubber in the consistent supply of msrl cell components, msrl pipes and fittings for 20 years.",
    "P.T. South Pacific Viscose, jakarta, indonesia april 2000, placed further specifications and work orders due to our quality services for their multistage flash evaporator plant suitable for extreme spin bath solutions.",
    "All india rubber industries association certification of merit, october 1999, issued to us in recognition of our outstanding export performance in respect to rubber lined equipments.",
    "P.T. Indo - Bharat Rayon, august 1999, placed more work orders for msrl msfe equipments.",
    "Siv industries limited, india january 1997, congratulated the team's operations on the msfe heaters for the client's viscose staple fiber plant.",
    "Grasim industries limited, india september 1997, applauded arul rubbers for its consistent handling of very tough operations in msfe heaters, tube plates and dish ends.",
    "Indian rayon and industries limited, india august 1996, complimented the team on their effort while reducing the downtime of complex equipments like vapor vessels and spin bath sand filters.",
    "Grasim industries limited, india october 1996, highlighted the commitment shown by the team while developing new chemicals under critical operations.",
    "Grasim industries limited, india january 1995, witnessed the team's versatility and skills under complex operations in developing new chemicals.",
    "Siv industries limited, india march 1995, complimented mr. vajravel for heading a team who developed various rubber linings to withstand acidic factors and live steam temperature for heater shells which was the first of its kind in india.",
    "Ballarpur industries limited, india june 1994, highlighted arul rubbers team for handling mission critical services in side channels and flanges for mercury cells.",
    "Kerala minerals and metals limited, india congratulated the team for its success in making their client's operations very successfully by carrying out white natural rubber lining operations for their sand mill rotor and stator. moreover, arul rubbers team also performed tasks in the rubber lining of their slurry storage tanks."
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Achievements
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Lead By Presence */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left sticky top-24">
            <div className="flex flex-col mb-4">
              <span className="text-blue-700 font-bold text-xs tracking-widest uppercase">LEAD BY</span>
              <h3 className="text-gray-800 font-extrabold text-3xl uppercase tracking-tighter">PRESENCE</h3>
            </div>
            
            <div className="mb-6 relative">
              <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
                <Globe className="w-16 h-16 text-red-600 stroke-[1.5]" />
              </div>
              <div className="absolute -bottom-2 w-full h-1 bg-red-600 flex justify-center">
                <div className="w-8 h-1 bg-red-600"></div>
              </div>
            </div>
          </div>

          {/* Right: Achievements List */}
          <div className="lg:col-span-8 space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 group"
              >
                <div className="pt-1 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-red-600 fill-red-50 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { ChevronRight, Award } from "lucide-react";
import { useState } from "react";

export function Quality() {
  const [activeTab, setActiveTab] = useState("Quality Policy");

  const tabs = ["Quality Policy", "Quality Objectives", "Quality Assurance Programme"];

  interface Section {
    heading?: string;
    items: string[];
  }

  interface TabContent {
    title: string;
    sections: Section[];
  }

  const content: Record<string, TabContent> = {
    "Quality Policy": {
      title: "We Are Committed To:",
      sections: [
        {
          items: [
            "Delivering quality to our customer through products and services that confirm to internationally recognized standards and Systems.",
            "Implementing current Good manufacturing practice with a strong emphasis on process, personal and environmental safety.",
            "Striving for continual quality improvement through comprehensive documentation and audits.",
          ],
        },
      ],
    },
    "Quality Objectives": {
      title: "Our Quality Objectives:",
      sections: [
        {
          items: [
            "Quality Conscious & Consistent Training to all employees.",
            "Continual improvement of Quality system & manufacturing procedure.",
            "On Time Delivery.",
            "Reducing Customer Complaints.",
            "Customer Satisfaction & timely Service after supply.",
          ],
        },
      ],
    },
    "Quality Assurance Programme": {
      title: "Quality Assurance Programme Systems For MSRL Equipments, Tanks And Vessels Etc.,",
      sections: [
        {
          heading: "1. FABRICATION OF TANK/VESSEL",
          items: [
            "1.1 Cutting Plan Layout will be prepared for the MSRL tank/vessel as per customer's drawing received along with the Purchase order.",
            "1.2 Purchase indent will be prepared for all necessary required raw materials as per the cutting plan layout and as per the material standards mentioned in the drawing.",
            "1.3 Order will be placed for the raw materials as per purchase indent through the Purchase Department.",
            "1.4 On receipt of every raw material at our works, inspection will be carried out for appropriate size, standard, and surface finish.",
            "1.5 Necessary Test Certificates and inspection report for all raw materials will be recorded and filed along with the Order received.",
            "1.6 Raw material will be cut to required sizes as per the cutting plan layout prepared.",
            "1.7 Plate edges will be prepared by grinding, for welding suitability as per applicable standard.",
            "1.8 Prepared plate will be rolled as per required Outer Diameter and a template for that particular tank/vessel will also be used.",
            "1.9 After plate rolling, the joint will be tag welded after checking the dimension for appropriate diameter.",
            "1.10 Root weld for the joint will be done, slag will be removed, and then DP test will be carried out to avoid any blow holes or cracks in the root.",
            "1.11 Full weld will be carried out over the root in layers (if required) depending on the thickness of the plate.",
            "1.12 Welding will be done as per our WPS (AR-WPS-001 / AR-WPS-002).",
            "1.13 Additional plates will be cut and rolled as per required size (length/height) of the tank/vessel and welding will be carried out (Following points 1.7 to 1.12).",
            "1.14 Rolled and welded plates will be set/fit as per required size (length/height) of the vessel/tank by tag welding along the circumference of the plate joint.",
            "1.15 Diameter and length will be checked as per drawing before welding the joints.",
            "1.16 Stiffeners will be provided for the inner circumference of the tank/vessel (if necessary depending on the diameter of the tank/vessel and plate thickness) and welding will be done by following points 1.10 to 1.12.",
            "1.17 Dimensions will be checked as per drawing for any distortions.",
            "1.18 Main Flanges for both ends of the tank/vessel will be machined and drilled as per drawing.",
            "1.19 Main flanges will be set/fit with both ends of the tank/vessel by tag welding and surface flatness will be checked for both the flanges.",
            "1.20 Welding will be carried out by following points 1.10 to 1.12 with the provision of stiffeners inside the tank/vessel to avoid any distortions.",
            "1.21 Required number of gussets will be prepared, fixed, and welded behind both the main flanges over the outer circumference of the tank/vessel.",
            "1.22 If dish/cone is required for the ends of the tank/vessel then points 1.18 to 1.21 will be avoided.",
            "1.23 For dish end, the dish will be pressed as per drawing for appropriate height/radius/circumference.",
            "1.24 The dish will be set/fit with the tank/vessel end and welding will be carried out by following points 1.10 to 1.12 with the provision of stiffeners if required.",
            "1.25 For cone end, the cone will be rolled (after cutting of required plate size, thickness, and plate edge preparation/grinding) as per drawing and the joint will be tag welded.",
            "1.26 Rolled cone joint will be welded by following points 1.10 to 1.12.",
            "1.27 Prepared cone will be set/fit with the tank/vessel end and welding will be carried out by following points 1.10 to 1.12 with the provision of stiffeners if required.",
            "1.28 All nozzles and manholes will be prepared (Pipes & Standard Flanges of required sizes as per drawing) will be set/fit and welding will be carried out by following points 1.10 to 1.12 as per drawing.",
            "1.29 Dimensions (including flatness of all flange surfaces) of all nozzles and manholes will be checked as per drawing.",
            "1.30 Orientations for all nozzles and manholes will be marked, cut opened on the circumference of the tank/vessel as per drawing.",
            "1.31 Cut opened edges will be grinded as per applicable standard before setting of all nozzles and manholes.",
            "1.32 Pipe edges of all nozzles and manholes will be grinded before setting.",
            "1.33 Setting of all nozzles and manholes will be carried out onto in its appropriate location in the tank/vessel and welding will be carried out by following points 1.10 & 1.11 for all neck joints.",
            "1.34 All welded joints (area to be rubber lined) inside the vessel will be grinded and smoothened suitable for Rubber Lining as per IS 4682 Part 1/BS 6374 Part 5.",
            "1.35 Visual inspection and DP test will be conducted for all welded & grinded area inside the tank/vessel for blow holes & cracks making it suitable for rubber lining.",
            "1.36 Final inspection will be carried out to ensure compatibility of the tank/vessel as per standard IS 4682 Part 1/BS 6374 Part 5.",
            "1.37 Hydraulic test/Vacuum test/water fill test will be carried out if required as per drawing/purchase order/service condition of the tank/vessel.",
          ],
        },
        {
          heading: "2. SURFACE PREPARATION",
          items: [
            "2.1 All surface area to be rubber lined will be cleaned with high pressure fresh water/air.",
            "2.2 All surface area to be rubber lined will be cleaned from any scale formation/rust/dust by shot blasting (using granulated hard grits) to achieve a surface profile of 50 to 100 microns which plays a vital role in increasing the bond strength of the rubber sheet to the metal surface.",
            "2.3 The blasted area will be cleaned by high pressure compressed air.",
            "2.4 All surface area/welded joints prepared for rubber lining will be checked again for any projections/undercuts/cracks/blow holes.",
          ],
        },
        {
          heading: "3. APPLICATION OF ADHESIVE",
          items: [
            "3.1 The application of adhesive will be carried out in a dust proof and controlled temperature area to avoid humidity/high temperature.",
            "The Excess air humidity will lead to condensation of water particles on the adhesive surface and excess temperature will lead to loose bonding of rubber sheet on the metal surface.",
            "3.2 The blasted area will be cleaned with thinner/Hexane to remove any fine dirt/dust/oil particles before adhesive application.",
            "3.3 Viscosity of the adhesive will be checked using a viscometer suitable for first, second and third coat application.",
            "3.4 First, second, and third coat of the adhesive will be applied with proper intervals as per our standards allowing a minimum of 12 hours(during summer) or maximum of 24 hours(during winter) between each coat depending on the weather condition.",
          ],
        },
        {
          heading: "4. COMPOUNDING AND CALENDERING OF RUBBER SHEET",
          items: [
            "4.1 Suitable Rubber Compound will be selected as per drawing/purchase order/service condition of the tank/vessel.",
            "4.2 Natural/synthetic raw rubber and chemicals will be weighed using precision electronic weighing scale in appropriate proportions as per our formula.",
            "4.3 The preliminary mixing (compounding) of rubber and chemicals (excluding the accelerators) will be carried out in an internal mixture (Kneader Machine) and the compounded rubber will be stored for a minimum of 12 hours for self settlement.",
            "4.4 The primer mixture will be mixed with accelerator using a mixing mill and again stored for a minimum of 12 hours for settlement.",
            "4.5 The fully mixed (compounded) rubber sheet will be warmed up in the open mixing mill and immediately fed through the three roll calendar machine and calendered.",
            "4.6 The required thickness of rubber sheet will be calendered and rolled over a liner (cotton cloth/fabric) using a doubling belt of size 1m width x 10m length.",
            "4.7 Calendered and rolled rubber sheets will be stored in an air conditioned storage room maintaining a temperature of 10 to 20 degree centigrade.",
            "4.8 Necessary testing of vulcanized rubber sheet as per drawing/purchase order/ service condition of the tank/vessel will be carried out as per IS 3400.",
          ],
        },
        {
          heading: "5. RUBBERLINING",
          items: [
            "5.1 Calendered and rolled rubber sheet (Un-cured and with the liner still fixed to the surface of the sheet) of appropriate thickness will be spread over a working table.",
            "5.2 The rubber sheet will be checked for surface finish (V or punch marks)/ sheet air.",
            "5.3 The rubber sheet will be cut forming tapered edges to the required shape and size using appropriate cutting tool.",
            "5.4 The tapered edges, the surface of the rubber sheet to be fixed onto the metal surface, and the metal surface will be cleaned using thinner / Hexane.",
            "5.5 The cut and cleaned rubber sheet will be affixed on the surface of the metal to be rubber lined and then the liner cloth will be removed.",
            "5.6 The affixed rubber sheet on the metal surface will be rolled and pressed from the center of the sheet using appropriate pressing tool to ensure proper removal of air and create perfect bonding with the metal.",
            "5.7 Points 5.1 to 5.6 will be followed to complete all required surface area to be rubber lined with proper overlapping joints as per IS 4682 Part 1/BS 6374 Part 5.",
            "5.8 All flange surfaces will be rubber lined atleast 1mm more than the required thickness as an allowance for machining/sandering after curing/vulcanizing.",
            "5.9 All rubber lined area will be checked for airlocks and spark tested for pinholes.",
            "5.10 The rubber lined tank/vessel will be left for settlement (atleast for 24 hours) and again inspected for any air/gas locks or pinholes before vulcanizing.",
            "5.11 Rubber lining will be carried out as per IS 4682 Part1/BS 6374 Part 5.",
          ],
        },
        {
          heading: "6. VULCANIZING",
          items: [
            "6.1 Autoclave curing/vulcanizing cycles differ from compound to compound as per our standard.",
            "6.2 Specific graph (Temperature Vs Pressure Vs Time) for vulcanizing/Curing Cycle of that particular rubber lined tank/vessel (as per the service condition and the rubber compound) will be issued to the boiler operator.",
            "6.3 Vulcanizing of the rubber lined tank/vessel will be carried out under controlled pressure and temperature (as per graph) in an Autoclave using saturated steam maintaining a maximum temperature of 135 to 140 degree centigrade.",
            "6.4 After completion of the cycle, the Autoclave will be brought down to atmospheric temperature by blowing down steam and pressure.",
            "6.5 The autoclave will be opened only after atleast an hour after blow down.",
          ],
        },
        {
          heading: "7. INSPECTION, TESTING, FINISHING, PACKING, AND DISPATCH",
          items: [
            "7.1 The entire rubber lined area for the tank/vessel will be tested for hardness, airlock, loose bonding and spark leak.",
            "7.2 For spark testing, the standard high frequency voltage will be 5KV/mm of rubber thickness and for carbon/graphite loaded rubber compound the spark test voltage will be 1.5 to 2 KV/mm of rubber thickness.",
            "7.3 The entire flange surface will be machined/sandered (to a maximum of 1mm thickness) for flatness and all flange edges will be smoothened to avoid sharp edges.",
            "7.4 After completion of inspection, testing, and finishing, the vessel will be hydraulic/vacuum tested if required as per drawing/purchase order/service condition of the tank/vessel.",
            "7.5 All un-rubber lined area will be rough blasted/cleaned and one coat red oxide will be painted for all rubber lined tank/vessel.",
            "7.6 Appropriate exterior blasting and layers of painting (Epoxy primer / Enamel) will also be carried out if it is specifically required by the customer as per drawing/purchase order.",
            "7.7 Finally the vessel will be visually inspected and spark tested before packing.",
            "7.8 All the outside exposed/open area like nozzles and manholes will be covered with soft, rubber/polythene gaskets fitted with steel/wooden dummies.",
            "7.9 The properly packed vessels will be loaded with due care onto a container/vehicle without damaging any rubber lined area.",
            "7.10 Wooden blocks will be provided wherever necessary to avoid damage during transportation and the carrier will be instructed regarding the precautions in handling.",
            "7.11 Inspection, Testing, Finishing, handling, and transportation for the rubber lined tank/vessel will be carried out as per IS 4682 Part 1 / BS 6374 Part 5.",
          ],
        },
      ],
    },
  };


  const currentTab = content[activeTab];


  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Quality
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Lead By Quality */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
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

          {/* Center: Text */}
          <div className="lg:col-span-6 text-gray-600 text-[15px] leading-relaxed space-y-4">
            <p>
              Ultimately, everything comes down to quality. Our success has been achieved by our unswerving commitment to adherence to the highest quality standards. Everything from sourcing of the raw material to the manufacturing process adhere to the highest quality standards which finds its reflection in the quality of the end product. What's more, stringent quality tests are carried across all stages of manufacture to ensure that the standards set are successfully met. Our quality assurance program, in fact, is quite comprehensive and covers all aspect of manufacture. We also ensure quality by staying open to the changes that impact the industry and stay on the cutting edge through up gradation, training programmes and innovations.
            </p>
            <p className="font-bold text-gray-800">
              We are an ISO-9001 : 2008 Certified Company
            </p>
          </div>

          {/* Right: Certified By */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <span className="text-xs font-bold text-gray-800 uppercase mb-2">CERTIFIED BY</span>
            <div className="w-32 h-32 border-2 border-blue-900 flex flex-col items-center justify-center p-2 rounded-sm shadow-md bg-white">
              <div className="w-full h-full border-2 border-blue-900 bg-blue-50 flex flex-col items-center justify-center font-bold text-blue-900 text-center">
                <span className="text-xs">TÜV</span>
                <div className="h-px bg-blue-900 w-8 my-0.5"></div>
                <span className="text-xs">SÜD</span>
                <span className="text-[10px] mt-1">ISO 9001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-100 shadow-sm rounded-lg overflow-hidden">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-3 bg-gray-50 flex flex-col">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-6 py-4 text-sm font-semibold transition-all border-b border-gray-200 last:border-b-0 ${
                  activeTab === tab
                    ? "bg-[#0071BC] text-white shadow-md z-10"
                    : "text-gray-600 hover:bg-white hover:text-blue-700"
                }`}
              >
                {tab}
              </button>
            ))}
            <div className="flex-grow bg-gray-50"></div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9 p-8 bg-blue-50 min-h-[500px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-light text-gray-700 mb-8 tracking-tight border-b border-blue-200 pb-4">
                {currentTab.title}
              </h3>
              
              <div className="space-y-12 max-h-[1000px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-blue-200">
                {currentTab.sections.map((section, sIndex) => (
                  <div key={sIndex} className="space-y-6">
                    {section.heading && (
                      <h4 className="text-lg font-bold text-blue-900 tracking-wide uppercase border-l-4 border-red-600 pl-4 bg-white py-2 rounded-r-md shadow-sm">
                        {section.heading}
                      </h4>
                    )}
                    <div className="space-y-4">
                      {section.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="mt-1.5 flex-shrink-0 bg-red-600 rounded-full p-0.5 shadow-sm group-hover:scale-110 transition-transform">
                            <ChevronRight size={12} className="text-white" />
                          </div>
                          <p className={`text-gray-600 text-sm leading-relaxed ${item.startsWith('1.') || item.startsWith('2.') || item.startsWith('3.') || item.startsWith('4.') || item.startsWith('5.') ? 'font-medium' : ''}`}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}



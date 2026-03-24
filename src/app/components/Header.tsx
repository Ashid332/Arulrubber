import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";

// --- Mega Menu Data ---
const topSectionColumns = [
  // Column 1
  [
    {
      title: "MS FABRICATION & RUBBER LINING",
      items: ["MSRL Rubber Lining", "MSRL Tanks & Vessels", "MSRL Pipes & Fittings", "MSRL Ductings", "MSRL Rollers", "MSRL Sandmill Rotor & Stator"]
    },
    {
      title: "SITE RUBBER LINING & PROJECTS",
      items: ["Rubber Lining & Projects"]
    }
  ],
  // Column 2
  [
    {
      title: "MSFE PROJECT EQUIPMENT & PRODUCTS",
      items: ["Tube Holder Plates", "Heater Shells and Evaporators", "Sand Filters", "Cyclone Separators", "Star Rollers", "Intel & Flash Nozzles", "Pipes & Fittings", "Rubber Gaskets & O-rings / Seal rings"]
    }
  ],
  // Column 3
  [
    {
      title: "PULLEY LAGGINGS",
      items: ["Plain", "Grooved", "Herringbone", "Ceramic"]
    },
    {
      title: "MOULDED PRODUCTS",
      items: ["O Rings", "Gaskets", "Buffers"]
    }
  ],
  // Column 4
  [
    {
      title: "HOSES",
      items: ["Acid Transfer", "Chemical Transfer", "Dredging", "Rubber Expansion Joints / Bellows"]
    },
    {
      title: "RUBBERS",
      items: ["Grades", "Lining Services"]
    }
  ]
];

const materialHandlingCategories = [
  {
    title: "TURN-KEY PROJECTS",
    items: ["Fuel Handling Systems", "Ash Handling Systems"]
  },
  {
    title: "CONVEYORS",
    items: ["Belt", "Shuttle", "Tripper", "Screw", "Side-Wall Belt", "Slat Chain", "Portable Bag"]
  },
  {
    title: "FEEDERS",
    items: ["Drag Chain", "Belt", "Screw"]
  },
  {
    title: "SPARES",
    items: ["Idlers", "Pulleys", "Internal Scrapper", "External Scrapper", "Rack and Pinion Gate", "Rod Gate", "Screw Gate"]
  },
  {
    title: "OTHERS",
    items: ["Bucket Elevator", "Vibrating Feeder", "Vibrating Screen (Circular & Linear)", "Crusher (Hammer Mills)", "Mild & Stainless Steel Fabrications"]
  }
];
// ----------------------

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About Us", "Products", "Industries", "Facilities", "R & D", "Clients", "News", "Enquiry", "Contact Us"];
  const aboutDropdownItems = [
    { title: "Corporate Info", href: "/corporate-info" },
    { title: "MD's Message", href: "/md-message" },
    { title: "Quality", href: "/quality" },
    { title: "Certificates", href: "/certificates" },
    { title: "Awards", href: "/awards" },
    { title: "Achievements", href: "/achievements" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1e3a8a] text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-red-500">ARUL RUBBERS</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-6">
            {navItems.map((item, index) => (
              <div key={item} className={`group ${item === "About Us" ? "relative" : "static"}`}>
                {item === "Home" ? (
                  <Link
                    to="/"
                    className="text-white hover:text-red-400 transition-colors duration-300 py-2 inline-block font-medium uppercase text-xs"
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    href={item === "About Us" ? "/corporate-info" : item === "Industries" ? "/industries" : item === "Facilities" ? "/facilities" : item === "R & D" ? "/research-and-development" : item === "Clients" ? "/clients" : item === "News" ? "/news" : item === "Enquiry" ? "/enquiry" : item === "Contact Us" ? "/contact-us" : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white hover:text-red-400 transition-colors duration-300 py-2 inline-block font-medium uppercase text-xs"
                  >
                    {item}
                  </a>
                )}
                
                {item === "About Us" && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    {/* Hover Bridge */}
                    <div className="absolute top-0 left-0 w-full h-3 bg-transparent"></div>
                    <div className="bg-white rounded-lg shadow-xl py-2 min-w-[200px] border-t-4 border-red-500 overflow-hidden cursor-default relative z-10">
                      {aboutDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.title === "Corporate Info" ? "/corporate-info" : subItem.title === "MD's Message" ? "/md-message" : subItem.title === "Quality" ? "/quality" : subItem.title === "Certificates" ? "/certificates" : subItem.title === "Awards" ? "/awards" : subItem.title === "Achievements" ? "/achievements" : subItem.href}
                          className="block px-4 py-2.5 text-blue-900 hover:bg-blue-50 hover:text-red-600 transition-colors text-sm font-semibold border-b border-gray-50 last:border-0"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {item === "Products" && (
                  <div className="absolute top-full left-0 w-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    {/* Hover Bridge */}
                    <div className="absolute top-0 left-0 w-full h-6 bg-transparent" />
                    
                    {/* Max width container to align with header */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-default relative z-10 text-left">
                      <div className="bg-white rounded-b-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] p-6 md:p-8 w-full border-t-4 border-red-500 max-h-[75vh] overflow-y-auto custom-scrollbar">
                        {/* Top Section */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                          {topSectionColumns.map((col, colIndex) => (
                            <div key={colIndex} className="space-y-6">
                              {col.map((section, secIndex) => (
                                <div key={secIndex}>
                                  <h3 className="text-blue-700 text-sm font-bold uppercase mb-3 tracking-wide">{section.title}</h3>
                                  <ul className="space-y-2">
                                    {section.items.map((prod, pIndex) => (
                                      <li key={pIndex}>
                                        <Link to={`/products#${prod.toLowerCase().replace(/[\s&/]+/g, '-')}`} className="text-gray-600 text-[13px] sm:text-sm hover:text-red-500 transition-colors block">
                                          {prod}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* Divider */}
                        <hr className="border-gray-200 my-6" />

                        {/* Bottom Section: Material Handling */}
                        <div>
                          <h3 className="text-blue-700 text-sm font-bold uppercase mb-4 tracking-wide">MATERIAL HANDLING</h3>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {materialHandlingCategories.map((category, catIndex) => (
                              <div key={catIndex}>
                                <h4 className="text-blue-700 text-[13px] font-bold uppercase mb-3">{category.title}</h4>
                                <ul className="space-y-2">
                                  {category.items.map((prod, pIndex) => (
                                    <li key={pIndex}>
                                      <Link to={`/products#${prod.toLowerCase().replace(/[\s&/]+/g, '-')}`} className="text-gray-600 text-[13px] hover:text-red-500 transition-colors block">
                                        {prod}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 overflow-hidden"
            >
              {navItems.map((item, index) => (
                <div key={item}>
                  {item === "Products" ? (
                    <div className="py-2">
                       <a href="#products" className="block text-white hover:text-red-400 font-medium transition-colors duration-300">
                         {item}
                       </a>
                       <div className="pl-4 mt-2 space-y-4 border-l-2 border-blue-800">
                         {/* Mobile Fallback: Just the top categories as a simple list to avoid huge scrolling inline menus initially */}
                         {topSectionColumns.flat().map((section, idx) => (
                           <div key={idx} className="pb-1">
                             <div className="text-blue-300 text-xs font-bold uppercase mb-1">{section.title}</div>
                             <div className="space-y-1 pl-2">
                               {section.items.map((prod, pIdx) => (
                                 <Link key={pIdx} to={`/products#${prod.toLowerCase().replace(/[\s&/]+/g, '-')}`} className="block text-gray-300 text-xs hover:text-white" onClick={() => setIsMenuOpen(false)}>
                                   {prod}
                                 </Link>
                               ))}
                             </div>
                           </div>
                         ))}
                         <div className="pb-1">
                           <div className="text-blue-300 text-xs font-bold uppercase mb-1">MATERIAL HANDLING</div>
                            <Link to="/products#material-handling" className="block text-gray-300 text-xs hover:text-white" onClick={() => setIsMenuOpen(false)}>
                               View All
                            </Link>
                         </div>
                       </div>
                    </div>
                  ) : (
                    <motion.a
                      href={item === "About Us" ? "/corporate-info" : item === "Industries" ? "/industries" : item === "Facilities" ? "/facilities" : item === "R & D" ? "/research-and-development" : item === "Clients" ? "/clients" : item === "News" ? "/news" : item === "Enquiry" ? "/enquiry" : item === "Contact Us" ? "/contact-us" : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block py-2 text-white hover:text-red-400 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  )}
                </div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}


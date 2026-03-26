import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";

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
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center shrink-0"
          >
            <Link to="/">
              <img 
                src="/images/arul-rubbers-logo.png" 
                alt="Arul Rubbers Private Limited" 
                className="h-[50px] md:h-[70px] w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-6">
            {navItems.map((item) => (
              <div key={item} className={`group ${item === "About Us" ? "relative" : "static"}`}>
                {item === "Home" || item === "Products" ? (
                  <Link
                    to={item === "Home" ? "/" : "/products"}
                    className="text-white hover:text-red-400 transition-colors duration-300 py-2 inline-block font-medium uppercase text-xs"
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    to={item === "About Us" ? "/corporate-info" : item === "Industries" ? "/industries" : item === "Facilities" ? "/facilities" : item === "R & D" ? "/research-and-development" : item === "Clients" ? "/clients" : item === "News" ? "/news" : item === "Enquiry" ? "/enquiry" : item === "Contact Us" ? "/contact-us" : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white hover:text-red-400 transition-colors duration-300 py-2 inline-block font-medium uppercase text-xs"
                  >
                    {item}
                  </Link>
                )}
                
                {item === "About Us" && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
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
                  {item === "Home" || item === "Products" ? (
                    <Link
                      to={item === "Home" ? "/" : "/products"}
                      className="block py-2 text-white hover:text-red-400 font-medium transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item === "About Us" ? "/corporate-info" : item === "Industries" ? "/industries" : item === "Facilities" ? "/facilities" : item === "R & D" ? "/research-and-development" : item === "Clients" ? "/clients" : item === "News" ? "/news" : item === "Enquiry" ? "/enquiry" : item === "Contact Us" ? "/contact-us" : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-2 text-white hover:text-red-400 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
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

import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const quickLinks = ["Home", "About Us", "Products", "Services", "Contact"];

  return (
    <footer className="bg-blue-900 text-white py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-red-400 mb-4">ARUL RUBBERS</h3>
            <p className="text-blue-200 mb-4">
              Leading manufacturer of high-quality rubber products serving industries nationwide since 1990.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white hover:text-red-400 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-red-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-red-400 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-start space-x-3"
              >
                <Phone size={20} className="text-red-400 mt-1" />
                <div>
                  <p className="text-blue-200">+91 422 1234567</p>
                  <p className="text-blue-200">+91 98765 43210</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex items-start space-x-3"
              >
                <Mail size={20} className="text-red-400 mt-1" />
                <div>
                  <p className="text-blue-200">info@arulrubbers.com</p>
                  <p className="text-blue-200">sales@arulrubbers.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="border-t border-blue-700 pt-8 text-center"
        >
          <p className="text-blue-200">
            © 2026 Arul Rubbers. All rights reserved. | Designed with precision and care
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

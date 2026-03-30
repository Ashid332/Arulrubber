import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["Arul Rubbers Industrial Estate", "Coimbatore, Tamil Nadu", "India - 641001"],
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["+91 422 1234567", "+91 98765 43210"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@arulrubbers.com", "sales@arulrubbers.com"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Get in touch with us for inquiries, orders, or custom solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="text-red-400" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                      <div className="text-blue-700">
                        {item.content.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <label htmlFor="name" className="block text-blue-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <label htmlFor="email" className="block text-blue-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <label htmlFor="phone" className="block text-blue-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="+91 12345 67890"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <label htmlFor="message" className="block text-blue-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(220, 38, 38, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

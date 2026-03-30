import { Cog, Package, Truck, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Cog,
      title: "Custom Manufacturing",
      description: "Tailored rubber products designed and manufactured to your exact specifications",
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Expert guidance and consultation for selecting the right rubber solutions",
    },
    {
      icon: Package,
      title: "Bulk Orders",
      description: "Large-scale production capabilities for industrial and commercial requirements",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Efficient logistics and timely delivery across the country",
    },
  ];

  return (
    <section id="services" className="py-20 bg-red-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Comprehensive solutions to meet all your rubber product needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-900"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-blue-700">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-900 to-red-900 text-white p-12 rounded-lg text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Need a Custom Solution?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-xl mb-6"
          >
            Our team of experts is ready to work with you on specialized rubber products
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

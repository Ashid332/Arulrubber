import { Award, Shield, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "ISO certified manufacturing processes ensuring top-quality products",
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades of excellence in rubber manufacturing industry",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Dedicated team committed to exceeding customer expectations",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times with efficient production and logistics",
    },
  ];

  return (
    <section id="about" className="py-20 bg-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Arul Rubbers</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            We are a leading manufacturer of high-quality rubber products, serving industries
            across the nation with innovative solutions and unmatched reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-600"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4"
                >
                  <Icon className="text-red-400" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-blue-700">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

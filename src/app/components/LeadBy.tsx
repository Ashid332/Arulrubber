import { Lightbulb, Globe, BadgeCheck, Handshake, Factory, Package, Microscope, Trophy, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function LeadBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const items = [
    {
      subtitle: "LEAD BY",
      title: "VISION",
      icon: Lightbulb,
      description: "Since inception, some four decades back, we have steadily grown to reach the position of eminence we hold today because our founder Mr.V.Vajravel envisioned a future where we would hold sway and define the new direction...",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    },
    {
      subtitle: "LEAD BY",
      title: "PRESENCE",
      icon: Globe,
      description: "Corrosion and Abrasion cause damages worth Billions of Rupees in the Industry. Our Corrosion and Abrasion Resistant Rubber Lining prevents such damage which results in sizable savings throughout the Industry. Our...",
      iconColor: "text-red-500",
      iconBg: "bg-red-50"
    },
    {
      subtitle: "LEAD BY",
      title: "QUALITY",
      icon: BadgeCheck,
      description: "Ultimately, everything comes down to quality. Our success has been achieved by our unswerving commitment to adherence to the highest quality standards. Everything from sourcing of the raw material to the manufacturing...",
      iconColor: "text-blue-800",
      iconBg: "bg-blue-100"
    },
    {
      subtitle: "LEAD BY",
      title: "RELATIONSHIP",
      icon: Handshake,
      description: "The customer comes first. This is a dictum that has been ingrained in us from day one. We are committed to a customer-centric approach and believe that our success can only be measured by that of our customer's. It is...",
      iconColor: "text-red-600",
      iconBg: "bg-red-50"
    },
    {
      subtitle: "LEAD BY",
      title: "FACILITIES",
      icon: Factory,
      description: "Our manufacturing facilities showcase the very best in the field. Constant up gradation of technologies and processes ensure that we always stay on the cutting edge. Everything is in house and ship shape. These include: Rubber...",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50"
    },
    {
      subtitle: "LEAD BY",
      title: "PRODUCTS",
      icon: Package,
      description: "Over the years we have developed a wide range of products by keeping our ear to the ground and staying open to the demands of the market. By marshalling cutting edge technology with strong innovative prowess, our products...",
      iconColor: "text-red-600",
      iconBg: "bg-red-50"
    },
    {
      subtitle: "LEAD BY",
      title: "RESEARCH",
      icon: Microscope,
      description: "At the heart of all our efforts is innovation facilitated by investments in cutting edge research facilities. Also to ensure that the finest quality parameters are met, we go that extra mile to put every single product through...",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    },
    {
      subtitle: "LEAD BY",
      title: "RECOGNITION",
      icon: Trophy,
      description: "Over the years our efforts have won recognition across the globe and we believe that when you have a good thing going honours are bound to come your way. 2012 - Asia Pacific International Award for Manufacture...",
      iconColor: "text-red-600",
      iconBg: "bg-red-50"
    }
  ];

  return (
    <section className="py-16 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full border-t flex-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-700 font-bold text-xs tracking-widest uppercase">{item.subtitle}</span>
                    <h3 className="text-gray-800 font-extrabold text-2xl uppercase tracking-tighter mt-1">{item.title}</h3>
                  </div>
                  <div className={`p-3 rounded-full ${item.iconBg}`}>
                    <Icon strokeWidth={2} size={32} className={item.iconColor} />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="flex justify-end mt-auto">
                  <a href="#" className="flex items-center text-sm font-semibold text-gray-500 hover:text-blue-700 transition-colors group">
                    Read more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Building, Globe, User } from "lucide-react";

export function ContactUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-light text-gray-800 mb-6 tracking-wide">
            Arul <span className="font-medium text-[#0071BC]">Rubbers Private Limited</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-[15px] text-justify">
            Centrally Located to South of India, Hosur, is one of the Largest Industrial Town connected by the National Highway from Up-North to Down-South of India. The Closest and one of the major Airport,Banglore, is about 35 Kms (22 Miles) from Hosur is Connected by the National Highway. The Closest and one of the major Seaport,Chennai, is about 300 Kms (186 Miles) from Hosur is Connected by the National Highway. Some of the other major Airports & Seaports, Cochin, Tuticorin & Mangalore are within 500 Kms (310 Miles) in radius from Hosur. Transportation by Road, Air & Sea is always easy to access from our Esteemed industrial Town, Hosur, INDIA.
          </p>
        </motion.div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Map Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col pt-2"
          >
            <div className="w-full h-[600px] rounded-sm overflow-hidden shadow-md border border-gray-200 relative group/map">
              <a 
                href="https://www.google.com/maps/place/Arul+Rubbers+Pvt.+Ltd./@12.7633521,77.790909,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae710823217583:0xa6e34eef6880a3e!8m2!3d12.7633521!4d77.790909!16s%2Fg%2F1q62mmw0f?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 block cursor-pointer"
                title="Open in Google Maps"
              >
                <div className="absolute inset-0 bg-black/0 group-hover/map:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 px-4 py-2 rounded shadow-lg opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 text-[#0071BC] font-medium text-sm flex items-center">
                    <Globe size={16} className="mr-2" /> View on Google Maps
                  </div>
                </div>
              </a>
              <iframe 
                src="https://maps.google.com/maps?q=12.7633521,77.790909&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Arul Rubbers Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Contact Details Data */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 lg:pl-6"
          >
            <h3 className="text-2xl font-light text-gray-800 mb-8 tracking-wide">
              Contact <span className="font-medium text-[#0071BC]">Details</span>
            </h3>

            <div className="space-y-8">
              
              {/* Corporate Office */}
              <div className="flex items-start group">
                <div className="mt-1 mr-4 text-[#0071BC]">
                  <Building size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[15px] mb-2">Corporate Office:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    ARUL RUBBERS PVT.LTD.,<br />
                    B-5, SIDCO Industrial Estate<br />
                    HOSUR - 635 126,<br />
                    Krishnagiri Dt.,<br />
                    Tamil Nadu, INDIA
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Group Company */}
              <div className="flex items-start group">
                <div className="mt-1 mr-4 text-[#E31837]">
                  <Building size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[15px] mb-2">Group Company:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    ARUL POLYMERS PVT.LTD.,<br />
                    A6-C, SIDCO Industrial Estate<br />
                    HOSUR - 635 126,<br />
                    Krishnagiri Dt.,<br />
                    Tamil Nadu, INDIA
                  </p>
                  <p className="text-gray-600 text-sm flex items-center mb-1">
                    <Phone size={14} className="mr-2 text-gray-400" /> +91 99945 55845
                  </p>
                  <a href="http://www.arulpolymers.com" target="_blank" rel="noreferrer" className="text-[#0071BC] text-sm flex items-center hover:underline">
                    <Globe size={14} className="mr-2" /> www.arulpolymers.com
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Marketing */}
              <div className="flex items-start group">
                <div className="mt-1 mr-4 text-[#0071BC]">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[15px] mb-2">Marketing</h4>
                  <div className="space-y-1">
                    <a href="mailto:vp.marketing@arulrubbers.com" className="text-[#0071BC] text-sm block hover:underline">
                      vp.marketing@arulrubbers.com
                    </a>
                    <a href="mailto:mgr.marketing@arulrubbers.com" className="text-[#0071BC] text-sm block hover:underline">
                      mgr.marketing@arulrubbers.com
                    </a>
                    <p className="text-gray-600 text-sm flex items-center pt-1">
                      <Phone size={14} className="mr-2 text-gray-400" /> +91 82200 40044
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Services */}
              <div className="flex items-start group">
                <div className="mt-1 mr-4 text-[#0071BC]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[15px] mb-2">Technical Services</h4>
                  <div className="space-y-1">
                    <a href="mailto:tech.services@arulrubbers.com" className="text-[#0071BC] text-sm block hover:underline">
                      tech.services@arulrubbers.com
                    </a>
                    <p className="text-gray-600 text-sm flex items-center pt-1">
                      <Phone size={14} className="mr-2 text-gray-400" /> +91 99524 11737
                    </p>
                  </div>
                </div>
              </div>

              {/* General Info */}
              <div className="flex items-start group pt-2">
                <div className="mt-1 mr-4 text-[#E31837]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[15px] mb-1">General Info:</h4>
                  <a href="mailto:info@arulrubbers.com" className="text-[#0071BC] text-sm block hover:underline">
                    info@arulrubbers.com
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

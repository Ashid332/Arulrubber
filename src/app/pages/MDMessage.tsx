import { motion } from "motion/react";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

export function MDMessage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images = ["/images/md_message.png"];
  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            MD's Message
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <p className="text-gray-600 text-[15px] leading-relaxed italic text-center max-w-5xl mx-auto mb-10 border-b pb-8">
            Arul Rubbers Founder Chairman <span className="font-bold text-gray-800">Mr.V.Vajravel</span> has got tremendous experience in Rubber lining and development of Rubber Compounds for more than 40 years and received many accolades from various clients. He has also received many awards from various organizations in India. The most recent ones being the Export Merit award from AIRIA, Global Achievement Award from Global Achievers Foundation, Delhi and Rashtriya Udyog Ratan Award from Indian Organization for business research and development, Delhi.
          </p>

          <h2 className="text-2xl font-light text-gray-600 mb-4 tracking-tight">
            Managing Director's Message
          </h2>
          <div className="h-px bg-gray-200 w-full mb-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Image & Details */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div 
                className="rounded-sm overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-200 cursor-pointer"
                onClick={() => setSelectedImageIndex(0)}
              >
                <img 
                  src="/images/md_message.png" 
                  alt="Mr. V. Arul Vajravel - Managing Director" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-tight">MR. V. ARUL VAJRAVEL</h3>
                <p className="text-blue-700 font-semibold text-sm">Managing Director</p>
                <p className="text-gray-500 text-sm italic">Arul Rubbers Private Limited</p>
              </div>
            </motion.div>

            {/* Right Column: Message Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-600 text-[15px] leading-relaxed"
            >
              <p className="font-bold text-gray-800 text-lg">Dear Friends,</p>
              
              <p>
                The Arul Group of Companies made its foray in the world of rubber in the year 1978 and since then, and I am very proud to state this, we have been in the forefront of offering quality solutions to our customers and resolving their problems.
              </p>
              
              <p>
                For more than three decades, we have been offering services to meet the most stringent technical requirements of our customers. I am very pleased to inform you that over 70% of our business is repeat business, thereby underlining our customers trust in our capability.
              </p>
              
              <p>
                Quality, Innovation, Consistency & Dedication has been the hallmark of the Arul Group. Backed by a technically sound and loyal team, we have been able to deliver outstanding Quality & Service to our customers.
              </p>
              
              <p>
                Implementing good manufacturing practices, striving for continual quality improvement through comprehensive documentation and audits has resulted in a high level of quality consciousness in our entire team.
              </p>
              
              <p>
                We are frequent participants and visitors to International and Domestic Exhibitions and Trade Shows, which enables us to keep abreast of the latest trends in the Industry. This also helps us in identifying and introducing newer and diverse products in our product range.
              </p>
              
              <p>
                I take this opportunity to reaffirm our commitment to offer to you the highest level of quality and service standards.
              </p>

              <div className="pt-6 border-t border-gray-100">
                <p className="font-bold text-gray-800">Thank you,</p>
                <p className="text-blue-700 font-bold text-lg mt-1 italic">V.Arul Vajravel</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Lightbox 
        images={images}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={() => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))}
        onPrev={() => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))}
      />
    </div>
  );
}

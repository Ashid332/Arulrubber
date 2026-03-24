import { motion } from "motion/react";
import { Mail, Phone, User, Info } from "lucide-react";

export function Enquiry() {
  const contacts = [
    {
      name: "Mr. V.Arul Vajravel",
      role: "(Managing Director)",
      email: "arul@arulrubbers.com",
      phone: "+91 9952411734"
    },
    {
      name: "Mr. Hemendra Killawala",
      role: "(VP Marketing)",
      email: "vp.marketing@arulrubbers.com",
      phone: "+91 9952411735"
    },
    {
      name: "Marketing Manager",
      role: "",
      email: "mgr@arulrubbers.com",
      phone: "+91 8220040044"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title Bar */}
      <div className="bg-[#0071BC] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-normal text-white text-center tracking-widest uppercase">
            Enquiry
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-light text-gray-800 mb-8 tracking-wide">
              Send Your <span className="font-medium text-[#0071BC]">Queries</span>
            </h2>
            <p className="text-gray-500 mb-8 text-sm">
              For Enquiry, Please Enter Your Details Below...
            </p>

            <form className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "E-mail", type: "email" },
                { id: "contact", label: "Contact Number", type: "tel" },
                { id: "subject", label: "Subject", type: "text" }
              ].map((field) => (
                <div key={field.id} className="flex grid grid-cols-12 gap-4 items-center">
                  <label htmlFor={field.id} className="col-span-12 sm:col-span-3 text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <div className="col-span-12 sm:col-span-9">
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full border border-gray-200 rounded-sm px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white shadow-sm"
                    />
                  </div>
                </div>
              ))}

              <div className="flex grid grid-cols-12 gap-4 items-start pt-2">
                <label htmlFor="message" className="col-span-12 sm:col-span-3 text-sm font-medium text-gray-700 pt-2">
                  Message
                </label>
                <div className="col-span-12 sm:col-span-9">
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white shadow-sm resize-y"
                  ></textarea>
                </div>
              </div>

              <div className="flex grid grid-cols-12 gap-4 items-center pt-4">
                <div className="col-span-12 sm:col-span-3"></div>
                <div className="col-span-12 sm:col-span-9">
                  <button
                    type="button"
                    className="bg-black text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors shadow-md rounded-sm"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:border-l lg:border-gray-100 lg:pl-16"
          >
            <h2 className="text-2xl font-light text-gray-800 mb-10 tracking-wide">
              For More Info <span className="font-medium text-[#0071BC]">Contact:</span>
            </h2>

            <div className="space-y-8">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="bg-blue-50 p-3 rounded-full mr-5 group-hover:bg-blue-100 transition-colors">
                    <User className="text-[#0071BC]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold text-[15px]">{contact.name}</h4>
                    {contact.role && (
                      <p className="text-gray-500 text-sm mb-2">{contact.role}</p>
                    )}
                    <div className="flex flex-col space-y-1 mt-2">
                      <a href={`mailto:${contact.email}`} className="text-[#0071BC] text-sm hover:underline flex items-center">
                        <Mail className="mr-2 h-3.5 w-3.5" /> {contact.email}
                      </a>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-gray-600 text-sm hover:text-[#0071BC] transition-colors flex items-center">
                        <Phone className="mr-2 h-3.5 w-3.5" /> {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full h-px bg-gray-100 my-6"></div>

              {/* General Info */}
              <div className="flex items-start group">
                <div className="bg-red-50 p-3 rounded-full mr-5 group-hover:bg-red-100 transition-colors">
                  <Info className="text-[#E31837]" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold text-[15px] mb-2">General Info:</h4>
                  <a href="mailto:info@arulrubbers.com" className="text-[#0071BC] text-sm hover:underline flex items-center">
                    <Mail className="mr-2 h-3.5 w-3.5" /> info@arulrubbers.com
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

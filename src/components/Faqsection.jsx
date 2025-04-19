import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react"; 
import faqs from "../data/Faqs"; 

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const previewFaqs = faqs.slice(0, 5);

  return (
    <div className="w-full px-6 py-12 pb-20 bg-[#1b7738] max-w-screen-xl mx-auto">
      <h2
        className="text-4xl md:text-7xl mb-8 text-center py-5"
        style={{
          fontFamily: "CameraObscuraDEMO, sans-serif",
          letterSpacing: 2,
          color: "#ffffff",
          textShadow: `
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            0px 2px 0 #000,
            2px 0px 0 #000,
            0px -2px 0 #000,
            -2px 0px 0 #000
          `,
        }}
      >
        Frequently Asked Questions
      </h2>

      <div className="border-t" style={{ borderColor: "#fff" }}>
        {previewFaqs.map((faq, index) => (
          <div
            key={index}
            className="py-6 cursor-pointer select-none"
            onClick={() => toggleFAQ(index)}
            style={{
              borderBottom: index !== previewFaqs.length - 1 ? "1px solid #fff" : "none",
            }}
          >
            <div className="text-lg md:text-3xl pl-3 font-bold text-[#c4eec2] flex justify-between items-center space-grotesk-regular">
              {faq.question}
              <ChevronDown
                size={28}
                className={`text-[#c4eec2] transition-transform duration-300 mr-3 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-grotesk-regular overflow-hidden text-base md:text-xl text-[#fff] my-3 mt-5 pr-2 pl-4"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <Link to="/faqs" className="flex justify-center mt-8">
        <div className="relative group">
          {/* Yellow shadow box */}
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-yellow-400 z-0"></div>

          {/* Foreground button */}
          <div className="relative z-10 border-2 border-black bg-white px-4 py-2 md:px-8 md:py-4 font-bold text-black text-lg md:text-2xl transition-transform duration-300 group-hover:scale-103 space-grotesk-regular">
  View More FAQs
</div>
        </div>
      </Link>
    </div>
  );
};

export default FAQAccordion;

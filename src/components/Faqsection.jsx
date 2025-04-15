import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import faqs from "../data/Faqs"; // 👈 import the actual FAQ data

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Get only the first 5 FAQs
  const previewFaqs = faqs.slice(0, 5);

  return (
    <div className="w-full px-6 py-12 bg-[#1b7738] max-w-screen-xl mx-auto">
      <h2
        className="text-4xl md:text-7xl mb-8 text-center py-5"
        style={{
          fontFamily: "CameraObscuraDEMO, sans-serif",
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

      <Link to="/faqs" className="flex justify-center text-center my-5 group">
        <div className="text-[#c4eec2] text-2xl space-grotesk-regular px-2 group-hover:scale-110 transition-transform duration-300">
          View More
        </div>
        <span className="material-symbols-outlined pt-1 group-hover:scale-110 transition-transform duration-300">
          keyboard_double_arrow_right
        </span>
      </Link>
    </div>
  );
};

export default FAQAccordion;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I know the freelancers you provide are qualified for my project?",
    answer:
      "We vet all freelancers through a rigorous process including portfolio review, skill assessment, and interviews to ensure they meet your standards.",
  },
  {
    question: "Can I choose specific freelancers for my team?",
    answer:
      "Yes, you’ll be able to view profiles and choose the freelancers who best fit your project needs.",
  },
  {
    question: "What if I need to scale my team up or down quickly?",
    answer:
      "We offer flexible scaling options so you can easily add or remove team members based on your workload.",
  },
  {
    question: "How do you ensure accountability and quality in a remote team?",
    answer:
      "We use tools and processes for regular updates, progress tracking, and performance reviews to maintain high standards.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-6 py-12 bg-[#1f8d42] max-w-screen-xl mx-auto">
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

      <div className="border-t" style={{ borderColor: "#000" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-6 cursor-pointer select-none"
            onClick={() => toggleFAQ(index)}
            style={{
              borderBottom: index !== faqs.length - 1 ? "1px solid #000" : "none",
            }}
          >
            <div className="text-lg md:text-3xl font-bold text-[#c4eec2] flex justify-between items-center space-grotesk-regular ">
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
                  className="space-grotesk-regular overflow-hidden text-base md:text-xl text-[#fff] my-3 mt-6 pr-2"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <Link 
        to={"/faq"}
        className="flex justify-center text-center my-5 group"
      >
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

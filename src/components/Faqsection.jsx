import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
      question: "How do i know the freelancers you provide are qualified for my project?",
      answer:
        "We vet all freelancers through a rigorous process including portfolio review, skill assessment, and interviews to ensure they meet your standards.",
    },
    {
      question: "Can i choose specific freelancers for my team?",
      answer:
        "Yes, you’ll be able to view profiles and choose the freelancers who best fit your project needs.",
    },
    {
      question: "What if i need to scale my team up or down quickly?",
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
    <div className="w-full px-6 py-12 bg-[#1f3cfc] max-w-screen-xl mx-auto">
      <h2
        className="text-6xl mb-10 text-center py-5"
        style={{ fontFamily: "CameraObscuraDEMO, sans-serif", color: "#f6eee2" }}
      >
        Frequently Asked Questions
      </h2>
      <div
        className="border-t"
        style={{ borderColor: "#bbc5fa" }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-6 cursor-pointer select-none"
            onClick={() => toggleFAQ(index)}
            style={{
              borderBottom: index !== faqs.length - 1 ? "1px solid #bbc5fa" : "none",
            }}
          >
            <div className="text-xl md:text-3xl font-bold text-[#bbc5fa] flex justify-between items-center shrikhand-regular">
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
                  className="space-grotesk-regular overflow-hidden text-xl text-[#f6eee2] my-3 mt-6 pr-2"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

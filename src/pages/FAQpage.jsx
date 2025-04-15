import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqs from '../data/Faqs';
import Footer from '../components/Footer';

const FAQpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 bg--200 py-20 mb-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center my-16"
        style={{fontFamily: "CameraObscuraDEMO"}}
        >
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl mx-3 overflow-hidden shadow-md"
            >
              <button
                className="w-full text-left px-6 py-5 bg-gray-100 hover:bg-gray-200 transition flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-lg md:text-xl text-gray-800">
                  {faq.question}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-gray-600">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                    className="px-6 py-4 bg-white text-gray-700 text-base md:text-lg whitespace-pre-line origin-top overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQpage;

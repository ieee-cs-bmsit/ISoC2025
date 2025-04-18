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
      <div className="min-h-screen w-full bg-[#1b6f36] py-20 mb-10">
        <div className="max-w-6xl mx-auto px-5 py-10 mt-8">
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-[#f6f1e8] mb-16"
            style={{
              fontFamily: "CameraObscuraDEMO, sans-serif",

              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0px 2px 0 #000,
                2px 0px 0 #000,
                0px -2px 0 #000,
                -3px 0px 0 #000
              `,
            }}
          >
            Frequently Asked Questions
          </h1>

          {/* FAQs */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
              key={index}
              className="border-[#c4eec2] border-3 rounded-xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
            >
            
                <button
                  className="w-full text-left px-6 py-5 bg-[#1b6f36] hover:bg-[#239d4a69] transition flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-lg md:text-xl text-white">
                    {faq.question}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-white">
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
                      className="px-6 py-4 bg-[#f6eee2] text-[#16632e] text-base md:text-xl whitespace-pre-line origin-top overflow-hidden font-semibold"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQpage;

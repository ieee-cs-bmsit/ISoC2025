import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import faqs from "../data/Faqs";
import Footer from "../components/Footer";
import Thunder from '../assets/img/thhunder.png';
import ThunderMobile from '../assets/img/thhunder_mobile.png';

const FAQpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [bgImage, setBgImage] = useState(Thunder); // Default to desktop

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const updateBackgroundImage = () => {
      const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
      setBgImage(isMobile ? ThunderMobile : Thunder);
    };

    updateBackgroundImage(); // Set on load
    window.addEventListener('resize', updateBackgroundImage);

    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#1b7738]">
        <div
          style={{
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-full min-h-screen mb-20 pt-20"
        >
          <div className="max-w-6xl mx-auto px-5 pt-10 mt-8">
            {/* Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-7xl text-center text-white mb-16"
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
                  className="border-gray-100 hover:border-gray-200 border-2 rounded overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                >
                  <button
                    className="w-full text-left px-7 py-6 bg-[#e4ece4] hover:bg-[#ededed] transition flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-bold text-lg md:text-xl text-[#2f2e2e]">
                      {faq.question}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-black">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-gray-200 text-black text-base md:text-xl whitespace-pre-line origin-top font-semibold">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>

          <div className="text-center text-xl mx-15 md:text-4xl font-semibold text-white pb-30">
            Got more questions? Let’s talk on <a href="https://discord.gg/AUX9RP8fMr" className="text-blue-400  hover:text-blue-800 transition-colors cursor-pointer">Discord </a>!
          </div>

        </div>
        <Footer />
      </div>

    </>
  );
};

export default FAQpage;

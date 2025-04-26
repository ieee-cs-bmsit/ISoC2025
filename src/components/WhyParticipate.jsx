import React from 'react';
import { motion } from 'framer-motion';

const WhyParticipate = () => {
  const themeColor = '#ee540e';

  const reasons = [
    {
      title: 'Prize Pool : Rs.50,000',
      description: (
        <>
          <p>Compete for a chance to win cash prizes.</p>
          <p>Showcase your skills to a wider audience.</p>
          <p>Boost your portfolio with impactful contributions.</p>
        </>
      )
      ,
    },
    {
      title: 'Swags & Recognition',
      description:
        'Goodie Boxes for top 50 participants! Earn cool swags, and showcase your work to the community and potential recruiters.',
    },
    {
      title: 'Real-World Impact',
      description:
        'Contribute to meaningful open-source projects that solve real problems and benefit the global community.',
    },
    {
      title: 'Collaborate & Network',
      description:
        'Meet passionate developers, designers, and innovators from all over. Build connections that last beyond the event.',
    },
    
  ];

  return (
    <section id="why-participate" className="py-20 px-4" style={{ backgroundColor: themeColor }}>
      <div className="max-w-7xl mx-auto text-white">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#f5f1eb] mb-10 text-center md:text-left"
          style={{
            fontFamily: 'CameraObscuraDEMO, sans-serif',
            letterSpacing: 3.5,
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
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Why Contribute?
        </motion.h2>

        <motion.p
          className="text-2xl md:text-2xl mb-16 md:mb-20 max-w-6xl mx-auto md:mx-0 font-semibold text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Whether you're a seasoned contributor or just starting your open-source journey,
          this event is your launchpad to connect, learn, and make a real impact.
          <br />
          <ul className="list-disc font-bold text-2xl list-inside mt-8">
            <li>FREE Registrations</li>
            <li>INR 50K Prize Pool</li>
            <li>Swags and Merchandise</li>
            
          </ul>
        </motion.p>

        <div className="flex flex-wrap gap-12 justify-center">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative w-[90%] sm:w-[80%] md:w-[45%] lg:w-[22%] max-w-[320px] z-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Yellow “shadow” behind */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-yellow-400 z-0" />

              {/* Beige Card content */}
              <div className="relative bg-[#f8f2ea] w-full h-full text-black border border-black p-6 shadow-lg z-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 shrikhand-regular">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;

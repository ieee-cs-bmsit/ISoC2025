import React from 'react';
import { TeamDetails, TeamDetails1, TeamDetails2 } from '../data/Teamdata';
import { LuSparkle } from "react-icons/lu";
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.45,
      ease: "easeOut"
    }
  })
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const Teampage = () => {
  return (
    <div>
      <div className=' mt-[2rem] p-6 rounded-xl border-2 bg-[#f6eee2]'>
        {/* Heading */}
        <motion.p
          className='text-center text-4xl md:text-6xl font-bold font-[CameraObscuraDEMO] py-6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
        >
          Meet the <span className='text-[#EE540E] uppercase mt-2'>Team</span>
        </motion.p>

        {/* Team Cards */}
        <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 py-4 justify-center'>
          {TeamDetails.map((member, index) => (
            <motion.div
              className='bg-[#fff] rounded-[10px] max-w-[260px] p-5 flex flex-col relative mx-auto border-[3px] border-black shadow-[8px_8px_10px_rgba(0,0,0,0.45)]'
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className='relative w-[200px] h-[140px] rounded-[10px] mb-2 border-[3px] border-black'>
                <img src='/images/randomperson.jpg' alt="team member" className='w-full h-full object-cover rounded-[10px]' />
                <div className='absolute top-[-5px] right-[-26px] text-[3.2rem] text-[#ffca28] rounded-full p-1'>
                  <LuSparkle />
                </div>
              </div>
              <p className='text-[#000] text-[1.6rem] font-semibold text-left leading-[1.3] shrikhand-regular'>
                {member.name}
              </p>
              <p className='text-[#000] text-sm font-medium mb-5 text-left space-grotesk-regular'>
                {member.role}
              </p>
              <div className='flex gap-4 mt-auto'>
                <div className='w-10 h-10 rounded-full bg-[#f44336] shadow-[6px_6px_0px_rgba(0,0,0,0.25)] cursor-pointer'></div>
                <div className='px-12 py-3 rounded-full bg-[#f44336] shadow-[6px_6px_0px_rgba(0,0,0,0.25)] cursor-pointer'></div>
              </div>
            </motion.div>
          ))}
        </div>

        <hr className='my-6' />

        {/* Coordinators */}
        <motion.h2
          className='text-center text-4xl md:text-6xl font-bold  font-[CameraObscuraDEMO] py-6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
        >
          IEEE Student <span className='text-[#EE540E]'>Coordinators</span>
        </motion.h2>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 py-4 justify-center'>
          {TeamDetails1.map((member, index) => (
            <motion.div
              className='bg-[#fff] rounded-[10px] max-w-[260px] p-5 flex flex-col relative mx-auto border-[3px] border-black shadow-[8px_8px_10px_rgba(0,0,0,0.45)]'
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className='relative w-[200px] h-[140px] rounded-[10px] mb-2 border-[3px] border-black'>
                <img src='/images/randomperson.jpg' alt="team member" className='w-full h-full object-cover rounded-[10px]' />
                <div className='absolute top-[-5px] right-[-26px] text-[3.2rem] text-[#ffca28] rounded-full p-1'>
                  <LuSparkle />
                </div>
              </div>
              <p className='text-[#000] text-[1.6rem] font-semibold text-left leading-[1.3] shrikhand-regular'>
                {member.name}
              </p>
              <p className='text-[#000] text-sm font-medium mb-5 text-left space-grotesk-regular'>
                {member.role}
              </p>
              <div className='flex gap-4 mt-auto'>
                <div className='w-10 h-10 rounded-full bg-[#f44336] shadow-[6px_6px_0px_rgba(0,0,0,0.25)] cursor-pointer'></div>
                <div className='px-12 py-3 rounded-full bg-[#f44336] shadow-[6px_6px_0px_rgba(0,0,0,0.25)] cursor-pointer'></div>
              </div>
            </motion.div>
          ))}
        </div>

        <hr className='my-6' />

        {/* Volunteers */}
        <motion.h2
          className='text-center text-4xl md:text-6xl font-bold font-[CameraObscuraDEMO] py-8'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
        >
          IEEE Student <span className='text-[#EE540E]'>Volunteers</span>
        </motion.h2>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 py-4 justify-center'>
          {TeamDetails2.map((member, index) => (
            <motion.div
              className='bg-[#fff] rounded-[10px] max-w-[260px] p-5 flex flex-col relative mx-auto border-[3px] border-black shadow-[8px_8px_10px_rgba(0,0,0,0.45)]'
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className='relative w-[200px] h-[140px] rounded-[10px] mb-2 border-[3px] border-black'>
                <img src='/images/randomperson.jpg' alt="team member" className='w-full h-full object-cover rounded-[10px]' />
                <div className='absolute top-[-5px] right-[-26px] text-[3.2rem] text-[#ffca28] rounded-full p-1'>
                  <LuSparkle />
                </div>
              </div>
              <p className='text-[#000] text-[1.6rem] font-semibold text-left leading-[1.3] shrikhand-regular'>
                {member.name}
              </p>
              <p className='text-[#000] text-sm font-medium mb-5 text-left space-grotesk-regular'>
                {member.role}
              </p>
              <div className='flex gap-4 mt-auto'>
                <div className='w-10 h-10 rounded-full bg-[#f44336] shadow-[6px_6px_0px_rgba(0,0,0,0.25)] cursor-pointer'></div>
                <div className='px-12 py-3 rounded-full bg-[#f44336] shadow-[6px_6px_0px_rgba(0,0,0,0.25)] cursor-pointer'></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Teampage;

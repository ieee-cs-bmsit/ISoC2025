import React, { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import "./About.css"; // for Discord icon spin animation

function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, margin: "-100px" });

  return (
    <div className="bg-[#969696] py-12 px-4" ref={aboutRef}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-xl mx-auto p-10 bg-[#f9f2f2] bg-opacity-95 shadow-xl rounded-2xl flex flex-col lg:flex-row items-start gap-10 border border-black/10 transition-shadow duration-500"
      >
        {/* Left Section */}
        <div className="flex flex-col gap-6 flex-1">
          {/* "Stay Updated" Box */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(11, 15, 21, 0.5)",
            }}
            className="flex items-center gap-4 px-6 py-3 bg-[#263049] rounded-xl border-2 border-transparent hover:border-yellow-400 transition-all cursor-pointer w-fit"
          >
            <MdNavigateNext className="text-yellow-400 text-3xl" />
            <p className="text-white text-2xl font-bold tracking-wide shrikhand-regular">
              Stay Updated
            </p>
          </motion.div>

          {/* About Content */}
          <div className="flex flex-col gap-4 px-6 pb-6 text-gray-800 text-base md:text-lg space-grotesk-regular">
            <p>Open source is more than just code — it's a community.</p>
            <p>
              Stay connected, collaborate, and keep your journey going beyond
              the event!
            </p>

            <div className="flex flex-col gap-2 pl-1">
              <p className="flex items-start gap-2">
                <MdNavigateNext className="text-yellow-500 text-xl mt-1" />
                Network with like-minded developers, mentors, and industry
                professionals.
              </p>
              <p className="flex items-start gap-2">
                <MdNavigateNext className="text-yellow-500 text-xl mt-1" />
                Get Help & Support on projects, issues, and best practices.
              </p>
              <p className="flex items-start gap-2">
                <MdNavigateNext className="text-yellow-500 text-xl mt-1" />
                Exclusive Updates on new challenges, speaker sessions, and
                coding resources.
              </p>
              <p className="flex items-start gap-2">
                <MdNavigateNext className="text-yellow-500 text-xl mt-1" />
                Showcase Your Work and get feedback from peers and experts.
              </p>
            </div>

            <p>
              Don’t let the momentum stop when the event ends. Be part of
              something bigger.
            </p>
          </div>
        </div>

        {/* Right Section - Discord Button */}
        <div className="self-center lg:self-start">
          <motion.a
            whileHover={{
              scale: 1.05,
              rotate: [0, 3, -3, 0],
              textShadow: "0px 0px 8px #f4b400",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            href="#"
            className="flex items-center gap-3 text-yellow-500 text-2xl font-semibold hover:text-yellow-400 transition duration-300"
          >
            <span className="discord-icon">
              <FaDiscord className="text-3xl" />
            </span>
            Join Our Discord
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default About;

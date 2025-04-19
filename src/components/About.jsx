import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const descContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const descItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <div className="about-main-container">
      {/* LEFT COLUMN */}
      <div className="left-container">
        {/* Animated “Stay Updated” heading */}
        <h2
  className="stay-updated-heading"

>
  Stay Updated
</h2>


        {/* Animated description */}
        <motion.div
          className="about-content space-grotesk-regular"
          variants={descContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p
            variants={descItem}
            className="font-semibold text-lg md:text-3xl"
          >
            Open source is more than just code – it's a community.
          </motion.p>
          <motion.p
            variants={descItem}
            className="font-semibold text-lg md:text-3xl"
          >
            Stay connected, collaborate, and keep your journey going beyond the
            event!
          </motion.p>
          <motion.p variants={descItem} className="text-lg md:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            suscipit.
          </motion.p>
        </motion.div>

        {/* Join Here button */}
        <div className="button-div">
          <Link to="/" className="join-wrapper">
            <div className="relative">
              <div className="shadow-box" />
              <div className="join-button">Join Here</div>
            </div>
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN: Discord Widget */}
      <div className="right-container">
        <motion.iframe
          className="frame"
          src="https://discord.com/widget?id=1357044781171347466&theme=dark"
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        />
      </div>
    </div>
  );
}

export default About;

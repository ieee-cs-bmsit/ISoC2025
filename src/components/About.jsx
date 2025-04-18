import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="about-main-container">
        {/* Text + Button */}
        <div className="left-container">
        <Link to="/" className="flex mt-8">
        <div className="relative group">
          {/* Yellow shadow box */}
          <div className="absolute -bottom-1 -right-1 w-full h-full bg-white  z-0"></div>

          {/* Foreground button */}
          <div className="relative z-10 border-1 border-black bg-[#5865f2] px-4 py-2 md:px-8 md:py-4 text-white text-lg md:text-4xl transition-transform duration-300 group-hover:scale-103  shrikhand-regular" >
  Stay Updated
</div>
        </div>
      </Link>

          <div className="about-content space-grotesk-regular text-black">
            <p>Open source is more than just code - it's a community.</p>
            <p>Stay connected, collaborate, and keep your journey going beyond the event!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, suscipit.
            </p>
          </div>

          <div className="button-div">
          <Link to="/" className="flex mt-5 mb-7">
        <div className="relative group">
          {/* Yellow shadow box */}
          <div className="absolute -bottom-1 -right-1 w-full h-full bg-white z-0"></div>

          {/* Foreground button */}
          <div className="relative z-10 border-1 border-black bg-[#5865f2] px-5 py-3 md:px-8 md:py-4 text-white text-lg md:text-3xl transition-transform duration-300 group-hover:scale-103 shrikhand-regular">
  Join Here
</div>
        </div>
      </Link>
          </div>
        </div>

        {/* Discord Widget */}
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
            style={{marginTop:'5px'}}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

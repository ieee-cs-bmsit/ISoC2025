import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sponsorsection from "../components/Sponsorsection";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Faqsection from "../components/Faqsection";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyParticipate from '../components/WhyParticipate';
import sponsorData from "../data/Sponsordata.jsx";


const Home = () => {
  const location = useLocation();
  const sponsors = [];

  useEffect(() => {
    // Scroll to top when visiting home
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // If user clicked Timeline link, scroll to timeline
    if (location.state && location.state.scrollToTimeline) {
      setTimeout(() => {
        const timelineSection = document.getElementById("timeline-section");
        if (timelineSection) {
          timelineSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Give a small delay
    }
  }, [location]);

  for (let i = 0; i < sponsorData.length; i++) {
    sponsors.push(
      <a
        key={i}
        href={sponsorData[i].url}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2 inline-block"
      >
        <motion.img
          src={sponsorData[i].image}
          alt={`Sponsor ${i + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="w-[220px] md:w-[370px] object-contain"
        />
      </a>
    );
  }
  

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <About />

      {/* Timeline Section with id */}
      <div id="timeline-section">
        <Timeline />
      </div>

      {/* Sponsor Section */}
      <div
        className="py-15"
        style={{
          backgroundImage: "url('/images/sponsorbg.png')",
          backgroundPosition: "center",
        }}
      >
        <p
          className="text-center text-5xl md:text-7xl p-5 my-5 font-bold"
          style={{
            color: "#ee540e",
            fontFamily: 'CameraObscuraDEMO, sans-serif',
            textShadow: `
              -2px -2px 0 #fff,
              2px -2px 0 #fff,
              -2px 2px 0 #fff,
              2px 2px 0 #fff,
              0px 2px 0 #fff,
              2px 0px 0 #fff,
              0px -2px 0 #fff,
              -3px 0px 0 #fff
            `,
          }}
        >
          Our Sponsors
        </p>

        <Sponsorsection
          texts={[sponsors, sponsors]}
          velocity={80}
          numCopies={3}
          className="custom-scroll-text"
        />
      </div>

      <WhyParticipate />

      <div className="bg-[#1b7738] py-10">
        <Faqsection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

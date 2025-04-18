import React from 'react'
import Sponsorsection from "../components/Sponsorsection";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Faqsection from "../components/Faqsection";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollCard from '../components/ScrollCard';

const Home = () => {
  const sponsors = [];

  for (let i = 0; i < 10; i++) {
    sponsors.push(
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="space-grotesk-regular border-b-6 border-4 border-amber-600 rounded-xl"
        style={{
          fontSize: "20px",
          width: "200px",
          height: "200px",
          backgroundColor: "#f6b801",
          margin: "25px",
          display: "inline-block",
        }}
      >
        Sponsor {i + 1}
      </motion.div>
    );
  }
  return (
    <div>

      {/* Hero Section */}
      <Hero></Hero>

      <About />

      {/* Timeline Section */}
      <Timeline />

      {/*Sponsor Section*/}
      <div className="bg-[#f6eee2] py-10">
        <p
          className="text-center text-5xl md:text-7xl p-5 text-[#ee540e] my-5 text-shadow-xl font-bold"
          style={{
            fontFamily: "CameraObscuraDEMO, sans-serif",
            textShadow: `
              -1px -1px 0 #fff,
              1px -1px 0 #fff,
              -1px 1px 0 #fff,
              1px 1px 0 #fff
            `,
          }}
        >
          Our Sponsors
        </p>

        <Sponsorsection
          texts={[sponsors, sponsors]} // Two rows, each showing the 10 sponsors
          velocity={100}
          numCopies={3} // Controls how many times the row loops horizontally
          className="custom-scroll-text"
        />
      </div>

      <div className="bg-[#1b7738] py-10">
        <Faqsection />
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home

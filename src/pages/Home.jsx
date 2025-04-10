import React from 'react'
import Sponsorsection from "../components/Sponsorsection";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Faqsection from "../components/Faqsection";
import { motion } from "framer-motion";
import Repopreview from '../components/Repopreview';

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
      {/* Navbar Section */}
      {/* <div className=" text-center bg-black py-5 text-xl font-bold text-blue-500 mb-[300px] space-grotesk-regular"
      >
        Navbar
      </div> */}

      {/* Hero Section */}
      <div style={{height:"600px"}} className=" text-center p-10 text-9xl bg-[#fff] font-bold text-blue-500 space-grotesk-regular"
      >
        
        Hero Section
      </div>

      <About/>

      {/* Timeline Section */}
      <Timeline />

      {/*Sponsor Section*/}
      <div className="bg-[#f6eee2] py-10">
        <p
          className="text-center text-7xl p-6 text-[#ee540e] my-5"
          style={{ fontFamily: "CameraObscuraDEMO, sans-serif" }}
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
      <div>
        <Repopreview/>
      </div>
      <div className="bg-[#1f3cfc] py-10">
        <Faqsection />
      </div>

      <div style={{height:"600px"}} className=" text-center p-10 text-9xl bg-[#999696] font-bold text-white space-grotesk-regular"
      >
        
        Footer Section
      </div>
    </div>
  )
}

export default Home

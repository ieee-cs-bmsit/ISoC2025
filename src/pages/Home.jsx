import React from 'react'
import Sponsorsection from "../components/Sponsorsection";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Faqsection from "../components/Faqsection";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollCard from '../components/ScrollCard';
import WhyParticipate from '../components/WhyParticipate';

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
      <div
  className="bg-cover bg-center bg-no-repeat py-10"
  style={{
    backgroundImage: "url('/images/sponsorsectionbg.png')" // replace with your actual image path
  }}
>
  <p
    className="text-center text-5xl md:text-7xl p-5 my-5 font-bold"
    style={{
      color: "#fff",
      fontFamily: 'CameraObscuraDEMO, sans-serif',
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
    Our Sponsors
  </p>


        <Sponsorsection
          texts={[sponsors, sponsors]} // Two rows, each showing the 10 sponsors
          velocity={100}
          numCopies={3} // Controls how many times the row loops horizontally
          className="custom-scroll-text"
        />
      </div>

      {/* <div className="h-screen">
        <ScrollCard />
      </div> */}
      <div>
        <WhyParticipate/>
      </div>

      <div className="bg-[#1b7738] py-10">
        <Faqsection />
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home


import React, { useState, useEffect } from "react";
import heroBg from "../assets/img/winter-hero.jpeg"
import mobileLogo from "../assets/img/winter-hero.jpeg"
import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero-img-container lg:h-screen md:h-[60vh] h-[65vh] w-screen text-white flex flex-col font-body relative">
      <div className="flex-grow flex flex-col lg:justify-end justify-end items-center text-center relative">
        {/* Logo: Winter of Code Hero Image */}
        <img
          src={isMobile ? mobileLogo : heroBg}
          alt="Winter of Code Hero"
          className="w-full h-full absolute top-0 left-0 object-contain z-10"
        />

        {/* Buttons */}
        <div className=" justify-around flex space-x-4 md:space-x-8 relative -top-5 z-20">
          <button
            onClick={() => window.open("https://winter-of-code-4.devfolio.co/", "_blank")}
            className="relative py-3 lg:py-4 font-bold text-black bg-white cursor-pointer 
                px-6 sm:px-8 md:px-6 lg:px-10
                shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)] border-2 border-black 
                hover:scale-105 transition-all duration-200"
          >
            <p className="text-xs sm:text-lg">Register</p>
          </button>

          <button
            onClick={() => navigate("/repos")}
            className="relative py-3 lg:py-4 font-bold text-black bg-white cursor-pointer 
                px-6 sm:px-8 md:px-6 lg:px-10
                shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)] border-2 border-black 
                hover:scale-105 transition-all duration-200"
          >
            <p className="text-xs sm:text-lg">Repos</p>
          </button>

          <button
            onClick={() => navigate("/leaderboard")}
            className="relative py-3 lg:py-4 font-bold text-black bg-white cursor-pointer 
                px-6 sm:px-8 md:px-6 lg:px-10
                shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)] border-2 border-black
                hover:scale-105 transition-all duration-200"
          >
            <p className="text-sm sm:text-lg">Leaderboard</p>
          </button>

        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-text lg:text-xl sm:text-lg text-md text-white font-body font-bold bg-[#1f3bfb]">
        <div className="marquee-text-track">
          <p>BMSITM</p>
          <p>✺</p>
          <p>15th Oct to 1st Dec</p>
          <p>✺</p>
          <p>IEEE CS BMSITM</p>
          <p>✺</p>
          <p>BMSITM</p>
          <p>✺</p>
          <p>15th Oct to 1st Dec</p>
          <p>✺</p>
          <p>IEEE CS BMSITM</p>
          <p>✺</p>
          <p aria-hidden="true">BMSITM</p>
          <p aria-hidden="true">✺</p>
          <p aria-hidden="true">15th Oct to 1st Dec</p>
          <p aria-hidden="true">✺</p>
          <p aria-hidden="true">IEEE CS BMSITM</p>
          <p>✺</p>
          <p aria-hidden="true">BMSITM</p>
          <p aria-hidden="true">✺</p>
          <p aria-hidden="true">15th Oct to 1st Dec</p>
          <p aria-hidden="true">✺</p>
          <p aria-hidden="true">IEEE CS BMSITM</p>
          <p>✺</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

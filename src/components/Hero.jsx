import React, { useState, useEffect } from "react";
import heroBg from "../assets/img/ISoc_Desktop_Hero.svg";
import mobileLogo from "../assets/img/ISoc_Mobile_Hero.svg";
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
        {/* Logo: Switch between 2.svg (desktop) and ISoc_Mobile_Hero.svg (mobile) */}
        <img
          src={isMobile ? mobileLogo : heroBg}
          alt="Hero Logo"
          className="w-full h-full absolute top-0 left-0 object-contain z-10"
        />

        {/* Buttons */}
        <div className=" justify-around flex space-x-8 md:space-x-15 relative -top-5 z-20">
          <button
            className="relative py-3 lg:py-4 font-bold text-black bg-white cursor-pointer 
                px-6 sm:px-8 md:px-6 lg:px-10
                shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)] border-2 border-black 
                hover:scale-105 transition-all duration-200"
          >
            <a
              href="https://unstop.com/p/ieee-summer-of-code-bms-insitute-of-technology-and-management-1469982"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xs sm:text-lg">REGISTER</p>
            </a>
          </button>

          <button
  onClick={() => navigate("/repos")}
  className="relative py-3 lg:py-4 font-bold text-black bg-white cursor-pointer 
              px-6 sm:px-8 md:px-6 lg:px-10
              shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)] border-2 border-black
              hover:scale-105 transition-all duration-200"
>
  <p className="text-sm sm:text-lg">Repos</p>
</button>

        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-text lg:text-xl sm:text-lg text-md text-white font-body font-bold bg-[#1f3bfb]">
        <div className="marquee-text-track">
          <p>BMSITM</p>
          <p>✺</p>
          <p>9th May to 28st June</p>
          <p>✺</p>
          <p>IEEE CS BMSITM</p>
          <p>✺</p>
          <p>BMSITM</p>
          <p>✺</p>
          <p>9th May to 28st June</p>
          <p>✺</p>
          <p>IEEE CS BMSITM</p>
          <p>✺</p>
          <p aria-hidden="true">BMSITM</p>
          <p aria-hidden="true">✺</p>
          <p aria-hidden="true">9th May to 28st June</p>
          <p aria-hidden="true">✺</p>
          <p aria-hidden="true">IEEE CS BMSITM</p>
          <p>✺</p>
          <p aria-hidden="true">BMSITM</p>
          <p aria-hidden="true">✺</p>
          <p aria-hidden="true">9th May to 28st June</p>
          <p aria-hidden="true">✺</p>
          <p aria-hidden="true">IEEE CS BMSITM</p>
          <p>✺</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

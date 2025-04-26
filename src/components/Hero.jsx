import React from 'react'
import heroLogo from '../assets/img/socbiegelogo.png'
import "./Hero.css"
import heroBg from '../assets/img/2.svg'

const Hero = () => {
    return (
        <section
            className="h-screen w-screen text-white flex flex-col font-body"
        >

            <div className="flex-grow flex flex-col lg:justify-end justify-end items-center text-center">
                <img src={heroBg} alt=""
                    className='w-full h-full absolute'
                />
                {/* <img src={heroLogo} alt="IEEE Summer of Code" className="max-w-[90%] md:max-w-lg lg:scale-150 md:scale-120 sm:scale-100
                sm:-mt-15 lg:mt-25" /> */}

                <div className="w-1/2 justify-around flex space-x-6 -ml-8 relative -top-5">
                    <button
                        className="relative py-3 lg:py-4 font-bold text-black bg-white cursor-pointer 
        px-6 sm:px-8 md:px-6 lg:px-10 z-1
        shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)] border-2 border-black"
                    >
                        <p className='text-xs sm:text-lg'>REGISTER</p>
                    </button>

                    <button
                        className="relative py-3 lg:py-4 font-bold text-black bg-white cursor-pointer 
        px-6 sm:px-8 md:px-6 lg:px-10 
        shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)] border-2 border-black"
                    >
                        <p className='text-xs sm:text-lg'>ABOUT</p>
                    </button>
                </div>
            </div>
            <div className="marquee-text lg:text-xl sm:text-lg text-md text-white font-body font-bold bg-[#1f3bfb]">
                <div className="marquee-text-track">
                    <p>BMSITM</p>
                    <p>✺</p>
                    <p>5th May to 21st June</p>
                    <p>✺</p>
                    <p>IEEE CS BMSITM</p>
                    <p>✺</p>
                    <p>BMSITM</p>
                    <p>✺</p>
                    <p>5th May to 21st June</p>
                    <p>✺</p>
                    <p>IEEE CS BMSITM</p>
                    <p>✺</p>
                    <p aria-hidden="true">BMSITM</p>
                    <p aria-hidden="true">✺</p>
                    <p aria-hidden="true">5th May to 21st June</p>
                    <p aria-hidden="true">✺</p>
                    <p aria-hidden="true">IEEE CS BMSITM</p>
                    <p aria-hidden="true">✺</p>
                    <p aria-hidden="true">BMSITM</p>
                    <p aria-hidden="true">✺</p>
                    <p aria-hidden="true">5th May to 21st June</p>
                    <p aria-hidden="true">✺</p>
                    <p aria-hidden="true">IEEE CS BMSITM</p>
                    <p aria-hidden="true">✺</p>
                </div>
            </div>
        </section>
    )
}

export default Hero

import React from 'react'
import heroLogo from '../assets/img/ISoc_Logo.ai.png'

const Hero = () => {
    return (
        <section className="h-screen w-screen bg-black text-white flex flex-col font-body">
            <div className="flex-grow flex flex-col lg:justify-start justify-center items-center text-center">
                <img src={heroLogo} alt="IEEE Summer of Code" className="max-w-[90%] md:max-w-lg lg:scale-110 lg:mt-20" />

                <div className="mt-10 w-1/2 justify-around flex space-x-6 -ml-8">
                    <button
                        className="relative py-3 font-bold text-black bg-white cursor-pointer 
             px-6 sm:px-8 md:px-10 lg:px-12 z-1 
             shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)]"
                    >
                        <p className='text-sm md:text-lg'>REGISTER</p>
                    </button>

                    <button
                        className="relative py-3 font-bold text-black bg-white cursor-pointer 
             px-6 sm:px-8 md:px-10 lg:px-12 
             shadow-[8px_8px_0px_-2px_rgba(235,_210,_47,_1)]"
                    >
                        <p className='text-sm md:text-lg'>ABOUT</p>
                    </button>
                </div>
            </div>
            <div className="w-[100vw] overflow-hidden bg-sky-300 py-4 text-black font-bold relative">
                <style>
                    {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .scrolling-content {
            display: inline-flex;
            white-space: nowrap;
            gap: 2.5rem;
            animation: scroll 15s linear infinite;
          }
        `}
                </style>
                <div className="w-max scrolling-content text-xl">
                    <p>IEEE BMSITM</p>
                    <p>✺</p>
                    <p>5th May to 21st June</p>
                    <p>✺</p>
                    <p>IEEE CS BMSITM</p>
                    <p>✺</p>
                    <p>IEEE BMSITM</p>
                    <p>✺</p>
                    <p>5th May to 21st June</p>
                    <p>✺</p>
                    <p>IEEE CS BMSITM</p>
                </div>
            </div>
        </section>
    )
}

export default Hero

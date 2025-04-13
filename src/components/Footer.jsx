import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="relative z-1 font-body bg-[#ebd22f] -mt-20">
            <div className="overflow-hidden w-full leading-none">
                <svg
                    className="block w-full h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z"
                        fill="#1f3cfc"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto lg:px-15 px-4 lg:py-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-black text-xl outline-none border-none">
                <div>
                    <h3 className="font-title lg:text-3xl text-2xl lg:mb-5">PAGES</h3>
                    <ul className='lg:text-xl lg:font-semibold lg:font-body font-body2 text-xl flex lg:flex-col flex-row gap-10'><li>Work</li></ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-3xl text-2xl lg:mb-5">GOOD LINKS</h3>
                    <ul className="lg:-space-y-8 lg:font-semibold lg:font-body font-body2 lg:text-xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>Join as a talent</li>
                        <li>Join Waitlist</li>
                        <li>Open Doooookan</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-3xl text-2xl lg:mb-5">SOCIAL STUFF</h3>
                    <ul className="lg:-space-y-8 lg:font-semibold lg:font-body font-body2 lg:text-xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>Sounding Board</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-3xl text-2xl lg:mb-5">LEGAL-SHMEGAL</h3>
                    <ul className="lg:-space-y-8 lg:font-semibold lg:font-body font-body2 lg:text-xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>

            <div className="w-full border-t border-black text-center text-black flex sm:justify-between justify-center lg:px-20 sm:px-4 py-6 font-bold lg:text-md text-xs">
                <p>© 2023 Byooooob Media Opc Pvt Ltd &nbsp; | &nbsp; </p>
                <p>MADE WITH ❤️ IN INDIA</p>
            </div>
        </footer>
    );
};

export default Footer;

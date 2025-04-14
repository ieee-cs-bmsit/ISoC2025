import React from 'react';
import FooterLogo from '../assets/img/full logo.png'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="relative z-1 font-body -mt-20">
            <div className="overflow-hidden w-full leading-none mb-10">
                <svg
                    className="footer-wave block w-full h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ebd22f"
                        fillOpacity="1"
                        d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,202.7C672,224,768,224,864,213.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="max-w-full mx-auto lg:px-15 px-4 lg:py-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-black text-xl outline-none border-none bg-[#ebd22f]">
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">PAGES</h3>
                    <ul className='lg:text-2xl lg:font-semibold lg:font-body font-body2 text-xl flex lg:flex-col flex-row gap-10'><li>Work</li></ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">GOOD LINKS</h3>
                    <ul className="lg:-space-y-8 lg:font-semibold lg:font-body font-body2 lg:text-2xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>Join as a talent</li>
                        <li>Join Waitlist</li>
                        <li>Open Doooookan</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">SOCIAL STUFF</h3>
                    <ul className="lg:-space-y-8 lg:font-semibold lg:font-body font-body2 lg:text-2xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>Sounding Board</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">LEGAL-SHMEGAL</h3>
                    <ul className="lg:-space-y-8 lg:font-semibold lg:font-body font-body2 lg:text-2xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>

            <div className="w-full border-t border-black text-center text-black flex sm:justify-between justify-center lg:px-20 sm:px-4 py-4 font-bold lg:text-lg text-sm bg-[#ebd22f]">
                <p>© 2025 IEEE Summer of Code</p>
                <p> &nbsp; | &nbsp;</p>
                <p>MADE BY IEEE BMISTM</p>
            </div>
        </footer>
    );
};

export default Footer;

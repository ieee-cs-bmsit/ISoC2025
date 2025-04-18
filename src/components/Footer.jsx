import React from 'react';
import { Link } from 'react-router-dom';
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

            <div className="max-w-full mx-auto lg:px-15 px-4 lg:pt-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-black text-xl outline-none border-none bg-[#ebd22f]">
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">PAGES</h3>
                    <ul className='lg:text-2xl font-semibold font-body text-xl flex lg:flex-col flex-row gap-10'>
                        <Link to="/" className='w-fit h-fit'>
                            <li>Home</li>
                        </Link>
                        <Link to="/team" className='w-fit h-fit'>
                            <li>Team</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">QUICK LINKS</h3>
                    <ul className="lg:-space-y-8 font-semibold font-body lg:text-2xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>
                            <a href="https://bmsit.ac.in/" target='_blank'>
                                BMSIT</a>
                        </li>
                        <li>
                            <a href="https://40yrs.ieeebangalore.org/" target='_blank'>
                                IEEE YP Blr
                            </a>
                        </li>
                        <li>
                            <a href="https://ieeecsbangalore.org/" target='_blank'>
                                IEEE CS Blr
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">IEEE CS SOCIALS</h3>
                    <ul className="lg:-space-y-8 font-semibold font-body lg:text-2xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>
                            <a href="https://ieeecsbangalore.org/" target="_blank">
                                Instagram</a>
                        </li>
                        <li>
                            <a href="https://ieeecsbangalore.org/" target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://ieeecsbangalore.org/" target="_blank">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">ISOC SOCIALS</h3>
                    <ul className="lg:-space-y-8 font-semibold font-body lg:text-2xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <p className='bg-[#ebd22f] outline-none border-none font-body font-bold text-lg flex items-center justify-center py-2 -mt-1'>Contact us @ieee_cs@bmsit.in</p>
            <div className="w-full border-t border-black text-center text-black flex sm:justify-between justify-center lg:px-20 sm:px-4 py-4 font-bold lg:text-lg text-sm bg-[#ebd22f]">
                <p>2025 IEEE Summer of Code</p>
                <p> &nbsp; | &nbsp;</p>
                <p>MADE BY IEEE CS BMSIT&M</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
import COC from '../assets/pdf/CoC_open_source.pdf (1).pdf'
import tc from '../assets/pdf/T&C_open_source.pdf'
import pp from '../assets/pdf/Privacy_Policy_open_source.pdf'

const Footer = () => {
    return (
        <footer className="relative z-1 font-body -mt-20">
            <div className="max-w-full mx-auto lg:px-15 px-4 lg:pt-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-black text-xl outline-none border-none bg-[#ebd22f]">
                {/* other sections unchanged */}
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">QUICK LINKS</h3>
                    <ul className="font-semibold font-body lg:text-2xl text-xl flex flex-wrap lg:flex-col gap-x-10 lg:gap-y-2 gap-y-5">
                        <li className="whitespace-nowrap">
                            <a href="https://bmsit.ac.in/" target='_blank'>
                                BMSIT</a>
                        </li>
                        <li className="whitespace-nowrap">
                            <a href="https://yp.ieee.org/" target='_blank'>
                                IEEE YP
                            </a>
                        </li>
                        <li className="whitespace-nowrap">
                            <a href="https://yp.ieeebangalore.org/" target='_blank'>
                                IEEE YP Blr
                            </a>
                        </li>
                        <li className="whitespace-nowrap">
                            <a href="https://cs.ieeebangalore.org/" target='_blank'>
                                IEEE CS Blr
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">IEEE CS SOCIALS</h3>
                    <ul className="lg:-space-y-8 font-semibold font-body lg:text-2xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>
                            <a href="https://www.instagram.com/ieeecs.bmsit/" target="_blank">
                                Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/ieee-cs-bmsit/about/?viewAsMember=true" target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ieee-cs-bmsit" target="_blank">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">ISOC SOCIALS</h3>
                    <ul className="lg:-space-y-8 font-semibold font-body lg:text-2xl text-xl flex lg:flex-col flex-row gap-10">
                        <li>
                            <a href="https://www.instagram.com/ieeesoc/" target="_blank">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/ieeesoc/about/?viewAsMember=true" target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/dr56DzCwY8" target="_blank">
                                Discord
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-title lg:text-4xl text-2xl lg:mb-5">POLICY LINKS</h3>
                    <ul className="lg:-space-y-8 font-semibold font-body lg:text-2xl text-xl flex flex-wrap lg:flex-col flex-row gap-10 lg:gap-y-10 gap-y-5">
                        <li className='whitespace-nowrap'>
                            <a href={tc} target="_blank">
                                Terms & Conditions
                            </a>
                        </li>
                        <li className='whitespace-nowrap'>
                            <a href={COC} target="_blank">
                                Code of Conduct
                            </a>
                        </li>
                        <li className='whitespace-nowrap'>
                            <a href={pp} target="_blank">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full border-t border-black text-center text-black flex sm:justify-between justify-center lg:px-20 sm:px-4 py-4 font-bold lg:text-lg text-sm bg-[#ebd22f]">
                <p>2025 IEEE Summer of Code</p>
                <p> &nbsp; | &nbsp;</p>
                <p>MADE BY IEEE CS BMSIT&M</p>
            </div>
        </footer>
    );
};

export default Footer;

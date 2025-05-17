import React, { useEffect, useState } from 'react';
import { Columns2, ArrowUp01, UserRound, ListChecks } from 'lucide-react';

const Sidebar = ({ open, setOpen, activeItem, setActiveItem }) => {
    const [isMobile, setIsMobile] = useState(false);

    const menuItems = [
        { id: 'points', label: 'Points', icon: <ArrowUp01 className="scale-90" /> },
        { id: 'check-submission', label: 'Check Submission', icon: <ListChecks className="scale-90" /> },
    ];

    // Detect screen width and adjust sidebar behavior
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 980) {
                setIsMobile(true); // Set to mobile view
                setOpen(false); // Close sidebar on mobile
            } else {
                setIsMobile(false); // Set to desktop view
                setOpen(true); // Open sidebar on desktop
            }
        };

        handleResize(); // Call on initial render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [setOpen]);

    return (
        <>
            <aside
                className={`h-full py-7 bg-white fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out 
                    ${open ? 'w-[17%]' : 'w-17 hidden'} md:block`}
            >
                <header className={`flex ${open ? 'justify-between px-4' : 'justify-center'} items-center`}>
                    {open && <h1 className="text-lg font-bold space-grotesk-regular text-[#000]">IEEE <span className='text-[#ee540e]'>Summer of Code</span> </h1>}
                    {!isMobile && (
                        <button
                            className="cursor-pointer"
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            <Columns2 className="text-black" />
                        </button>
                    )}
                </header>

                <section className={`${!open && 'py-1'} mt-10 font-semibold text-black font-body text-md px-3`}>
                    <ul className="flex flex-col space-y-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.id}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveItem(item.id);
                                }}
                                className={`w-full ${activeItem !== item.id && 'hover:bg-[#eeeeee]'} hover:rounded-sm active:bg-[#eeeeee] active:rounded-sm px-3 py-0.5 ${activeItem === item.id ? 'bg-[#1e3ffa] text-white rounded-sm' : ''}`}
                            >
                                <li className="flex items-center gap-4 py-2 justify-start">
                                    {item.icon}
                                    {open && item.label}
                                </li>
                            </a>
                        ))}
                    </ul>
                </section>
            </aside>

            {/* Mobile Bottom Taskbar (Icons Only) */}
            {isMobile && (
                <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-3 bg-[#141a29] text-white md:hidden">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            className={`p-1 ${activeItem === item.id ? 'text-[#a993ec]' : 'text-white'}`}
                        >
                            {item.icon}
                        </button>
                    ))}
                </nav>
            )}
        </>
    );
};

export default Sidebar;

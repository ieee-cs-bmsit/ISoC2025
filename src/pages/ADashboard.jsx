import React, { useState } from 'react';
import Points from '../components/admin-dashboard/Points';
import CheckSubmission from '../components/admin-dashboard/CheckSubmission';
import Sidebar from '../components/admin-dashboard/Sidebar';
import { PRProvider } from '../context/PRProvider';

const ADashboard = () => {
    const [open, setOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('profile');

    const renderContent = () => {
        switch (activeItem) {
            case 'points':
                return <Points />;
            case 'check-submission':
                return <CheckSubmission />;
            default:
                return <Points />;
        }
    };

    return (
        <PRProvider>
            <section className="flex w-full min-h-screen font-sans bg-[#eeeeee]">
                <Sidebar
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />

                <main
                    className={`transition-all duration-300 ease-in-out w-full ${open ? 'ml-[17%]' : 'md:ml-17 ml-0'} md:pb-0 pb-14 pt-28`}
                >
                    {renderContent()}
                </main>
            </section>
        </PRProvider>
    );
};

export default ADashboard;

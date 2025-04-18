import React from 'react';
import { TeamDetails } from '../data/Teamdata';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import { LiaLinkedinIn } from "react-icons/lia";
import { GrInstagram } from "react-icons/gr";
import './TeamPage.css';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120
        }
    }
};

// Format heading: put the entire last word in <span>
const formatHeading = (title) => {
    if (!title) return '';
    const words = title.trim().split(' ');
    if (words.length === 1) {
        return <span>{words[0]}</span>;
    }
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    return (
        <>
            {firstPart} <span>{lastWord}</span>
        </>
    );
};

// Group by category instead of role
const groupByCategory = (data) => {
    return data.reduce((acc, member) => {
        const category = member.category || "Others";
        if (!acc[category]) acc[category] = [];
        acc[category].push(member);
        return acc;
    }, {});
};

const Team = () => {
    const groupedData = groupByCategory(TeamDetails);

    const renderCards = (data) => (
        <motion.div
            className="card-main-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {data.map((member, index) => (
                <motion.div
                    className="main-box motion-hover"
                    variants={cardVariants}
                    whileHover={{ scale: 1.04, rotate: 1 }}
                    key={index}
                >
                    <div className='star-icons'><img src={member.star_icon} alt="star" /></div>
                    <div className='main-box1'>
                        <div className="image-box">
                            <img src={member.img} alt={member.name} className='images' />
                        </div>
                        <div className="details-box">
                            <p className="title-name">{member.name}</p>
                            <p className="role">{member.role}</p>
                            <div className="socials-container">
                                {member.linkedin && (
                                    <motion.div
                                        className='social-1'
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <a href={member.linkedin} className='linkedin-icons' target="_blank" rel="noopener noreferrer">
                                            <LiaLinkedinIn />
                                        </a>
                                    </motion.div>
                                )}
                                {member.instagram && (
                                    <motion.div
                                        className='social-2'
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <a href={member.instagram} className='insta-icons' target="_blank" rel="noopener noreferrer">
                                            <GrInstagram />
                                        </a>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <div>
            <div className='top-main-container'>
                {Object.entries(groupedData).map(([category, members], idx) => (
                    <React.Fragment key={category}>
                        <motion.h2
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {formatHeading(category)}
                        </motion.h2>

                        {renderCards(members)}

                        {idx !== Object.keys(groupedData).length - 1 && <hr className='hr' />}
                    </React.Fragment>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Team;

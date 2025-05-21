import React, { useEffect } from "react";
import { MaintainerDetail } from "../data/MaintainerData";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { LiaLinkedinIn } from "react-icons/lia";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import "./TeamPage.css"; // You can rename this to MentorPage.css if needed

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const MaintainerPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div className="top-main-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our <span> Maintainers</span>
        </motion.h2>  

        <div className="card-main-container">
          {MaintainerDetail.map((member, index) => (
            <motion.div
              className="main-box"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              key={index}
            >
              <div className="star-icons">
                <img src={member.star_icon} alt="star" />
              </div>
              <div className="main-box1">
                <div className="image-box">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="images"
                    loading="lazy"
                  />
                </div>
                <div className="details-box">
                  <p className="title-name">{member.name}</p>
                  <p className="role">{member.role}</p>
                  <div className="socials-container">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="linkedin-icons"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LiaLinkedinIn />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        className="insta-icons"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GrInstagram />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        className="github-icons"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MaintainerPage;

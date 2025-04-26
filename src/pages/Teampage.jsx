import React, { useEffect } from "react";
import { TeamDetails } from "../data/Teamdata";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { LiaLinkedinIn } from "react-icons/lia";
import { GrInstagram } from "react-icons/gr";
import "./TeamPage.css";

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

const formatHeading = (title) => {
  if (!title) return "";
  const words = title.trim().split(" ");
  if (words.length === 1) return <span>{words[0]}</span>;
  const lastWord = words.pop();
  return (
    <>
      {words.join(" ")} <span>{lastWord}</span>
    </>
  );
};

const groupByCategory = (data) =>
  data.reduce((acc, member) => {
    const category = member.category || "Others";
    if (!acc[category]) acc[category] = [];
    acc[category].push(member);
    return acc;
  }, {});

const Team = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); 

  const groupedData = groupByCategory(TeamDetails);

  return (
    <div>
      <div className="top-main-container">
        {Object.entries(groupedData).map(([category, members], idx) => (
          <React.Fragment key={category}>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {formatHeading(category)}
            </motion.h2>

            <div className="card-main-container">
              {members.map((member, index) => (
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
                      {/* Lazy load the image */}
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
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {idx !== Object.keys(groupedData).length - 1 && (
              <hr className="hr" />
            )}
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Team;

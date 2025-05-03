import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { sponsorspagesponsors } from "../data/Sponsordata.jsx";

// Desired display order
const categoryOrder = [
  "Title Sponsor",
  "Platform Partners",
  "Track Sponsors",
  " Developer Tools & Learning Partners",
  "Digital Access Partners",
];

const Sponsorspage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Group sponsors by exact category name
  const groupedSponsors = {};
  sponsorspagesponsors.forEach((sponsor) => {
    const category = sponsor.sponsorcategory;
    if (!groupedSponsors[category]) groupedSponsors[category] = [];
    groupedSponsors[category].push(sponsor);
  });

  return (
    <>
      <div
        className="py-35 min-h-screen bg-repeat"
        style={{
          backgroundImage: "url('/images/sponsorbg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300%",
        }}
      >
        <style>
          {`
            @media (min-width: 768px) {
              div.bg-repeat {
                background-size: 130% !important;
              }
            }
          `}
        </style>

        <h2
          className="text-5xl md:text-7xl font-bold text-center mb-20 text-[#ed5a16]"
          style={{
            fontFamily: "CameraObscuraDEMO, sans-serif",
            textShadow: `
              -2px -2px 0 #fff,
              2px -2px 0 #fff,
              -2px 2px 0 #fff,
              2px 2px 0 #fff,
              0px 2px 0 #fff,
              2px 0px 0 #fff,
              0px -2px 0 #fff,
              -3px 0px 0 #fff
            `,
          }}
        >
          Our Sponsors
        </h2>

        {categoryOrder.map((category) =>
          groupedSponsors[category] ? (
            <div key={category} className="mb-15 px-5">
              <h3
                className="text-2xl md:text-4xl font-bold text-center mb-3 text-[#cc4a0e]"
                style={{ fontFamily: "Shrikhand, sans-serif" , fontWeight: 100}}
              >
                {category}
              </h3>

              <div className="flex flex-wrap justify-center gap-x-10 lg:gap-x-16">
                {groupedSponsors[category].map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:w-[390px] flex flex-col items-center cursor-pointer"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full flex flex-col items-center"
                    >
                      <div className="mb-10 w-full overflow-hidden">
                        <img
                          src={sponsor.image}
                          alt={`Sponsor ${category}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
      <Footer />
    </>
  );
};

export default Sponsorspage;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import reposData from "../data/Reposdata";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import  contributionGuidlines  from '../assets/pdf/ContGuide.pdf'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ReposPage = () => {
  const [repos, setRepos] = useState(reposData);
  const [search, setSearch] = useState("");
  const [selecteddomain, setSelecteddomain] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setRepos(reposData); // Set repos from local data
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const alldomains = [
    "All",
    ...new Set(repos.flatMap((repo) => repo.domain)),
  ];

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name.toLowerCase().includes(search.toLowerCase());
    const matchesdomain =
      selecteddomain === "All" || repo.domain.includes(selecteddomain);
    return matchesSearch && matchesdomain;
  });

  return (
    <div className="bg-repeat" style={{
      backgroundImage: "url('/images/repopagebg2.png')",
      backgroundRepeat: "repeat",
      backgroundSize: "200%",
    }}>
      <style>
        {`
          @media (min-width: 768px) {
            div.bg-repeat {
              background-size: 100% !important;
            }
          }
        `}
      </style>
      
      <div className="px-6 mb-30 pt-4 md:pt-33 max-w-7xl mx-auto bg-transparent">
        <h2
          className="md:text-7xl text-4xl sm:text-5xl text-[#1f3cfc] font-bold mb-18 text-center"
          style={{
            fontFamily: "CameraObscuraDEMO, sans-serif",
            textShadow: `-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, 0px 2px 0 #fff, 2px 0px 0 #fff, 0px -2px 0 #fff, -3px 0px 0 #fff`,
            letterSpacing: "2px",
          }}
        >
          Repositories
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <input
            type="text"
            placeholder="Search repositories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-3 bg-white border rounded border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-black space-grotesk-regular"
          />

          <div ref={dropdownRef} className="relative w-full sm:w-auto">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="sm:w-auto bg-white border border-gray-300 rounded px-4 py-3 text-left shadow-sm space-grotesk-regular focus:outline cursor-pointer flex"
            >
              <span className="font-bold text-sm md:text-md text">
                Filter by domain :
              </span>
              <span className="ml-2 text-gray-600 text-sm md:text-md">
                {selecteddomain}
              </span>
            </button>
            {showDropdown && (
              <ul className="absolute z-10 w-full md:w-52 bg-white border mt-2 rounded shadow space-grotesk-regular max-h-60 overflow-y-auto">
                {alldomains.map((domain) => (
                  <li
                    key={domain}
                    onClick={() => {
                      setSelecteddomain(domain);
                      setShowDropdown(false);
                    }}
                    className={`px-4 py-2 cursor-pointer transition-transform duration-200 transform hover:scale-[1.05] ${
                      selecteddomain === domain ? "font-bold" : "font-normal"
                    }`}
                    style={{ color: "black" }}
                  >
                    {domain}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.length === 0 ? (
            <p className="text-center col-span-full text-gray-600 font-semibold text-lg md:text-2xl py-15">
              No repositories to show. Please search with different keywords...
            </p>
          ) : (
            filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="bg-white border shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={repo.image}
                  alt={repo.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl space-grotesk-regular font-semibold mb-2">
                    {repo.name}
                  </h3>
                  <p className="text-gray-600 space-grotesk-regular mb-4">
                    {repo.shortDescription}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {repo.domain.map((lang) => (
                        <span
                          key={lang}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded space-grotesk-regular"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        repo.category === 'Platinum' ? 'bg-gray-100 text-gray-800 border border-gray-300' :
                        repo.category === 'Gold' ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' :
                        repo.category === 'Silver' ? 'bg-gray-200 text-gray-800 border border-gray-400' :
                        'bg-amber-400 text-amber-800 border border-amber-300'
                      }`}>
                        {repo.category}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/repo/${repo.id}`}
                    className="inline-block w-full text-center bg-[#1f3cfc] text-white py-2 px-4 rounded-xs hover:bg-[#1f3cfcef] transition-colors duration-200 space-grotesk-regular"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <a href={contributionGuidlines} target = '_blank' className="flex justify-center mt-8">
          <div className="relative group">
            {/* Yellow shadow box */}
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-yellow-400 z-0"></div>

            {/* Foreground button */}
            <div className="relative z-10 border-2 border-black bg-white px-4 py-2 md:px-8 md:py-4 font-bold text-black text-lg md:text-2xl transition-transform duration-300 group-hover:scale-103 space-grotesk-regular">
              Contribution Guidelines
            </div>
          </div>
        </a>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReposPage;
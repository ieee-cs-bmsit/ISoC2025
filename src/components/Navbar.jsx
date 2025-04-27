import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../assets/img/just logo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.dataset.scrollY = scrollY;
    } else {
      const scrollY = document.body.dataset.scrollY || "0";
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY, 10));
    }
  }, [isMenuOpen]);

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.querySelector(".navbar");

      if (navbar) {
        setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 70);
        navbar.classList.toggle("scrolled", currentScrollPos > 10);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToTimeline = (e) => {
    e.preventDefault();
    // Navigate to home and trigger scroll to timeline section
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToTimeline: true } });
    } else {
      const timelineSection = document.getElementById("timeline-section");
      if (timelineSection) {
        timelineSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`navbar ${visible ? "visible" : "hidden"}`}>
      <NavLink to="/" className="navbar-logo-link" onClick={closeMenu}>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </NavLink>

      {/* Desktop Links */}
      <div className="navbar-links">
        <ul className="navbar-list">
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={scrollToTimeline} className="navlink-button">
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" onClick={closeMenu}>
              LeaderBoard
            </NavLink>
          </li>
          <li>
            <NavLink to="/repos" onClick={closeMenu}>
              Repos
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" onClick={closeMenu}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" onClick={closeMenu}>
              FAQs
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="block md:hidden text-sm text-base font-bold pr-5">IEEE <span className="text-[#ee540e]">Summer of Code</span></div>

      {/* Hamburger only on mobile */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="dot-grid">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </button>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-container">
          <div className="mobile-menu-top">
            <NavLink to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" className="mobile-menu-logo" />
            </NavLink>
            <div className="close-btn" onClick={toggleMenu}>
              ×
            </div>
          </div>

          <ul className="mobile-slide-list">
            <li>
              <NavLink to="/" onClick={handleMobileNavClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" onClick={handleMobileNavClick}>
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/repos" onClick={handleMobileNavClick}>
                Repos
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={handleMobileNavClick}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/faqs" onClick={handleMobileNavClick}>
                FAQs
              </NavLink>
            </li>
          </ul>

          <Link
            to="https://unstop.com/p/ieee-summer-of-code-bms-insitute-of-technology-and-management-1469982"
            className="register-btn"
          >
            Register
          </Link>
          <hr />
          <div className="mobile-social">
            <p className="social-title">SOCIAL</p>
            <div className="links">
              <NavLink to="https://www.instagram.com/ieeecs.bmsit/">
                Instagram
              </NavLink>
              <NavLink to="https://www.linkedin.com/company/ieee-cs-bmsit/about/?viewAsMember=true">
                LinkedIn
              </NavLink>
              <NavLink to="https://github.com/ieee-cs-bmsit">Github</NavLink>
            </div>
            <hr />
            <div className="mobile-policy">
              <a
                href="/policydocs/Privacy_policy_open_source.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="/policydocs/T&C_open_source.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              <a
                href="/policydocs/CoC_open_source.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

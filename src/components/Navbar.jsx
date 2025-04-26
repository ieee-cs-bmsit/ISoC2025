import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/just logo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.dataset.scrollY = scrollY; // Store scrollY safely
    } else {
      const scrollY = document.body.dataset.scrollY || "0";
      document.body.style.position = '';
      document.body.style.top = '';
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
  }

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    // Scroll to top of the page
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // });
  }

  return (
    <div className={`navbar ${visible ? "visible" : "hidden"}`}>
      <NavLink to="/" className="navbar-logo-link" onClick={closeMenu}>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </NavLink>

      {/* Desktop Links */}
      <div className="navbar-links">
        <ul className="navbar-list">
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/leaderboard" onClick={closeMenu}>LeaderBoard</NavLink></li>
          <li><NavLink to="/repos" onClick={closeMenu}>Repos</NavLink></li>
          <li><NavLink to="/team" onClick={closeMenu}>Team</NavLink></li>
          <li><NavLink to="/faqs" onClick={closeMenu}>FAQs</NavLink></li>
        </ul>
      </div>

      {/* Hamburger only on mobile */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
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
            <div className="close-btn" onClick={toggleMenu}>×</div>
          </div>

          <ul className="mobile-slide-list">
            <li><NavLink to="/" onClick={handleMobileNavClick}>Home</NavLink></li>
            <li><NavLink to="/leaderboard" onClick={handleMobileNavClick}>Leaderboard</NavLink></li>
            <li><NavLink to="/repos" onClick={handleMobileNavClick}>Repos</NavLink></li>
            <li><NavLink to="/team" onClick={handleMobileNavClick}>Team</NavLink></li>
            <li><NavLink to="/faqs" onClick={handleMobileNavClick}>FAQs</NavLink></li>
          </ul>

          <button className="register-btn">Register</button>
          <hr />
          <div className="mobile-social">
            <p className="social-title">SOCIAL</p>
            <div className="links">
              <NavLink to="/">Instagram</NavLink>
              <NavLink to="/">LinkedIn</NavLink>
              <NavLink to="/">Github</NavLink>
            </div>
            <hr />
            <div className="mobile-policy">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
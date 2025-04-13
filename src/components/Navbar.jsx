import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup if component unmounts while menu is open
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar -mb-14'>
      {/* Logo */}
      <NavLink to="/" className="navbar-logo-link">
        <img
          src='/images/logo.png'
          alt='Logo'
          className='navbar-logo'
        />
      </NavLink>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="dot-grid">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-links">
        <ul className='navbar-list'>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/leaderboard" onClick={closeMenu}>Leaderboard</NavLink></li>
          <li><NavLink to="/repos" onClick={closeMenu}>Repos</NavLink></li>
          <li><NavLink to="/team" onClick={closeMenu}>Team</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Mobile Slide Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-slide">
          <div className="mobile-menu-top">
            <NavLink to="/" onClick={closeMenu}>
              <img
                src='/src/assets/Screenshot 2025-04-06 191735.png'
                alt='Logo'
                className='mobile-menu-logo'
              />
            </NavLink>
            <div className='close-btn' onClick={toggleMenu}>×</div>
          </div>

          <ul className='mobile-slide-list'>
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/leaderboard" onClick={closeMenu}>Leaderboard</NavLink></li>
            <li><NavLink to="/repos" onClick={closeMenu}>Repos</NavLink></li>
            <li><NavLink to="/team" onClick={closeMenu}>Team</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>

          <button className="register-btn">Register</button>
          <hr />
          <div className="mobile-social">
            <p className="social-title">SOCIAL</p>
            <div className="links">
              <NavLink to="#">Instagram</NavLink>
              <NavLink to="#">LinkedIn</NavLink>
              <NavLink to="#">Github</NavLink>
            </div>
            <hr />
            <div className="mobile-policy">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

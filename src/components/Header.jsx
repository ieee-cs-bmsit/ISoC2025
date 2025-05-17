import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/Authcontext";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const maintainers = ['PrithwisK07', 'Atul-k-m', 'Arnabpaul0101', 'Itsmenuma', 'Devansh051'];

const Header = () => {
  const { user, login, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMaintainer = user?.username &&
    maintainers.some(
      (name) => name.toLowerCase() === user.username.toLowerCase()
    );

  return (
    <header className="bg-transparent px-5 py-4 pt-10 w-full">
      {user ? (
        <div ref={dropdownRef} className="relative">
          {/* Small screen layout */}
          <div
            className="flex justify-between pt-16 items-center md:hidden w-full cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-gray-800 text-xl font-bold space-grotesk-regular">
              {user.displayName}
            </span>
            <img
              src={user.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-600"
            />
          </div>

          {/* Medium and up layout */}
          <div
            className="px-10 hidden md:flex items-center justify-end space-x-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-gray-800 text-2xl font-bold space-grotesk-regular">
              {user.displayName}
            </span>
            <img
              src={user.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-gray-600"
            />
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-35 md:w-45 bg-white border border-gray-200 font-semibold shadow-sm z-50">
              {isMaintainer ? (
                <Link
                  to="/admin-dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Admin
                </Link>
              ) : (<Link
                to="/dashboard"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Dashboard
              </Link>)}
              <button
                onClick={() => {
                  logout();
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex justify-end pt-16 md:pt-0">
          <button
            onClick={login}
            className="bg-black text-white px-4 py-2 md:px-6 md:mr-5 md:py-3 md:text-lg font-medium md:font-semibold rounded cursor-pointer flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
          >
            <img src="/images/githublogo.png" alt="GitHub Logo" className="w-5 h-5" />
            <span>Sign in</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

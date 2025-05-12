import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true); // new state

const fetchStatus = async () => {
  try {
    const res = await axios.get("https://isoc-backend-s21v.onrender.com/api/auth/status", {
      withCredentials: true,
    });

    const newUser = res.data.loggedIn ? res.data.user : null;

    const alreadyWelcomed = sessionStorage.getItem("hasWelcomed");

    if (!user && newUser && !alreadyWelcomed) {
      toast.success(`Welcome, ${newUser.displayName || newUser.username}!`);
      sessionStorage.setItem("hasWelcomed", "true");
    }

    setUser(newUser);
  } catch (err) {
    console.error("Error fetching auth status", err);
    setUser(null);
  } finally {
    setLoading(false); // done loading
  }
};

  useEffect(() => {
    fetchStatus();
  }, []);

  const login = () => {
    window.location.href = "https://isoc-backend-s21v.onrender.com/api/auth/github";
  };

  const logout = () => {
    sessionStorage.removeItem("hasWelcomed"); // reset for next login
    window.location.href = "https://isoc-backend-s21v.onrender.com/api/auth/logout";
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, fetchStatus }}>

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

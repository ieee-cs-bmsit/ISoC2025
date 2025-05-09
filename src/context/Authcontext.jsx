import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const hasWelcomed = useRef(false);

  const fetchStatus = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/status", {
        withCredentials: true,
      });
  
      const newUser = res.data.loggedIn ? res.data.user : null;
  
      // Check sessionStorage to avoid showing toast again on refresh
      const alreadyWelcomed = sessionStorage.getItem("hasWelcomed");
  
      if (!user && newUser && !alreadyWelcomed) {
        toast.success(`Welcome, ${newUser.displayName || newUser.username}!`);
        sessionStorage.setItem("hasWelcomed", "true"); // mark that toast was shown
      }
  
      setUser(newUser);
    } catch (err) {
      console.error("Error fetching auth status", err);
      setUser(null);
    }
  };
  
  useEffect(() => {
    fetchStatus();
  }, []);

  const login = () => {
    window.location.href = "http://localhost:5000/api/auth/github";
  };

  const logout = () => {
    sessionStorage.removeItem("hasWelcomed"); // reset for next login
    window.location.href = "http://localhost:5000/api/auth/logout";
  };  

  return (
    <AuthContext.Provider value={{ user, login, logout, fetchStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!loading && !user && !hasShownToast.current) {
      toast.error("Sign in to access the Dashboard");
      hasShownToast.current = true;
    }
  }, [loading, user]);

  if (!loading && !user) {
    return <Navigate to="/repos" state={{ from: location }} replace />;
  }

  if (loading) return null; // or a loading spinner if you want

  return children;
};

export default ProtectedRoute;

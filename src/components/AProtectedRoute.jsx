import React, { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import toast from "react-hot-toast";

const maintainers = ['PrithwisK07', 'Atul-k-m', 'Arnabpaul0101', 'Itsmenuma', 'Devansh051'];

const AProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const hasShownToast = useRef(false);

    const isMaintainer = user?.username &&
        maintainers.some(
            (name) => name.toLowerCase() === user.username.toLowerCase()
        );

    useEffect(() => {
        if (loading || hasShownToast.current) return;

        if (!user) {
            toast.error("Sign in to access the Dashboard");
        } else if (!isMaintainer) {
            toast.error("You are not authorized to access this page.");
        }

        hasShownToast.current = true;
    }, [loading, user, isMaintainer]);

    if (loading) return null;

    if (!user) {
        return <Navigate to="/repos" state={{ from: location }} replace />;
    }

    if (!isMaintainer) {
        return <Navigate to="/repos" state={{ from: location }} replace />;
    }

    return children;
};

export default AProtectedRoute;

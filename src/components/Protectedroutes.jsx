// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/Authcontext";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/repos" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

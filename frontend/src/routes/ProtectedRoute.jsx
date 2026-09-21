import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ allowedRoles, children }) {
  const { token, role } = useAuth();
  const location = useLocation();

  // If no JWT exists -> redirect to /login
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If JWT exists but role is not allowed -> redirect to /unauthorized
  if (allowedRoles && (!role || !allowedRoles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If JWT and role are valid -> render the requested page
  return children ? children : <Outlet />;
}

export default ProtectedRoute;

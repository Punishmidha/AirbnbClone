import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userDataContext } from "./UserContext";

function ProtectedRoute({ children }) {
  const { userData, loading } = useContext(userDataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    toast.warning("⚠️ Login required to continue!");
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;

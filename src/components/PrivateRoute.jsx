import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Logo } from "../assets/icon";
import Layout from "./Layout/Layout";

const PrivateRoute = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen p-5 bg-light flex items-center justify-center">
        <Logo className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  return isLoggedIn ? <Layout /> : <Navigate to="/login" />;
};

export default PrivateRoute;

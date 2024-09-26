import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Layout from "./Layout";
import { Logo } from "../assets/icon";

const PrivateRoute = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen p-5 bg-light flex items-center justify-center">
        <Logo className="h-12 w-12 logo-loading" />
      </div>
    );
  }

  return isLoggedIn ? <Layout /> : <Navigate to="/login" />;
};

export default PrivateRoute;

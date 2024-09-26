import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen relative h-screen flex flex-row">
      <div className="w-44 bg-green-400">navbar list</div>
      <div className="flex-grow w-full bg-light p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-screen relative min-h-screen flex flex-row bg-light text-secondary">
      <div className="bg-white h-screen">
        <Navbar />
      </div>
      <div className="flex-grow w-full px-6 py-4">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

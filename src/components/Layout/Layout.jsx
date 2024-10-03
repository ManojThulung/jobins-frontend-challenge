import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-row bg-light text-secondary overflow-hidden">
      <Sidebar />
      <div className="flex-1 w-full px-6 py-4 pb-10 overflow-hidden">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

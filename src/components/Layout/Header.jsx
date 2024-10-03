import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuIcon } from "../../assets/icon";
import { formatHeaderText } from "../../lib/helper";

import MobileSidebar from "./MobileSidebar";
import Notification from "./Notification";
import Profile from "./Profile";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const route = useLocation();

  const headerTitle = formatHeaderText(route.pathname);

  return (
    <header className="flex justify-between items-center pb-3">
      <h1 className="text-2xl font-bold items-center flex gap-2">
        <button
          onClick={() => setShowSidebar((prev) => !prev)}
          className="btn-ghost bg-white shadow-sm block xl:hidden"
        >
          <MenuIcon className="scale-x-[-1]" />
        </button>
        {headerTitle}{" "}
      </h1>
      <div className="flex gap-4 items-center">
        <Notification />
        <Profile />
      </div>

      <MobileSidebar open={showSidebar} setOpen={setShowSidebar} />
    </header>
  );
};

export default Header;

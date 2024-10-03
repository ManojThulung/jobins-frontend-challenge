import { useState } from "react";
import { Logo, MenuLeftIcon } from "../../assets/icon";
import NavItems from "./NavItems";

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [bgCollapse, setBgCollapse] = useState(false);

  // display full navbar on mouse hover
  const handleMouseOver = (value) => {
    if (bgCollapse) setIsCollapse(value);
  };

  // collapse navbar on menu click
  const updateCollapse = () => {
    setBgCollapse((prev) => !prev);
  };

  return (
    <div
      className={`bg-white h-screen relative hidden xl:block w-[260px] flex-shrink-0 transition-all duration-300 ease-in ${
        bgCollapse ? "w-[70px]" : "w-[260px]"
      }`}
    >
      <aside
        onMouseOver={() => handleMouseOver(false)}
        onMouseOut={() => handleMouseOver(true)}
        className={`fixed z-50 h-screen bg-white border transition-all duration-300 ease-in ${
          isCollapse ? "w-[70px]" : "w-[260px]"
        }`}
      >
        <nav className={`xl:block p-4 w-full pb-6`}>
          <div className="flex items-center justify-between gap-1 pb-2.5 relative">
            <div className="flex flex-grow items-center justify-start gap-1.5">
              <Logo
                className={`h-8 w-7 ${isCollapse ? "translate-x-1" : ""}`}
              />

              <h1
                className={`font-bold text-xl transition-all duration-300 ease-in ${
                  isCollapse ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                JoBins
              </h1>
            </div>
            <button className="btn-ghost" onClick={updateCollapse}>
              <MenuLeftIcon
                className={`cursor-pointer text-secondary transition-all ease-in duration-150 ${
                  isCollapse ? "rotate-180 hidden" : ""
                } ${bgCollapse ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          <NavItems isCollapse={isCollapse} />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

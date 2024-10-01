import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, MenuLeftIcon } from "../../assets/icon";
import { NavbarData } from "../../constant/navigation";

const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <aside className={`p-4  ${isCollapse ? "w-auto" : "w-[260px]"}`}>
      <nav>
        <div className="flex items-center justify-between gap-1 pb-2.5 relative">
          <div className="flex flex-grow items-center justify-start gap-1.5">
            <Logo className={`h-8 w-7`} />
            {!isCollapse && <h1 className="font-bold text-xl">JoBins</h1>}
          </div>
          <MenuLeftIcon
            className={`cursor-pointer text-secondary transition-all ease-in duration-150 hover:hover:bg-[#F3F4F8] rounded-[6px] ${
              isCollapse ? "rotate-180 hidden" : ""
            }`}
            onClick={() => setIsCollapse((prev) => !prev)}
          />
        </div>

        <div className="text-secondary-light">
          {NavbarData.map((navbar) => (
            <div key={navbar.section}>
              <h2
                className={`pb-2 pt-4 text-[11px] uppercase px-2.5 ${
                  isCollapse ? "hidden" : ""
                }`}
              >
                {navbar.section}
              </h2>
              <ul className="">
                {navbar.child.map((nav) => (
                  <Link to={nav.path} key={nav.name}>
                    <li className="flex flex-nowrap gap-2 items-center py-2 text-[15px] px-2 rounded-[6px] transition-all ease-in duration-150 hover:bg-[#F3F4F8] text-ellipsis">
                      <nav.icon className="flex-shrink-0" />
                      <span
                        className={`mt-[2px] whitespace-nowrap overflow-hidden text-ellipsis ${
                          isCollapse ? "hidden" : ""
                        }`}
                      >
                        {nav.name}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;

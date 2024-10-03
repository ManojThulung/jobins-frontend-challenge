import { NavLink, useLocation } from "react-router-dom";
import { NavbarData } from "../../constant/navigation";

const Navbar = ({ isCollapse = false, setOpen = null }) => {
  const route = useLocation();

  return (
    <div className="text-secondary-light">
      {NavbarData.map((navbar) => (
        <div key={navbar.section}>
          <h2
            className={`uppercase transition-all text-nowrap ${
              isCollapse
                ? "w-0 h-0 p-0 text-[0px]"
                : "opacity-100 w-auto h-auto pb-2 pt-4 px-2.5 text-[11px]"
            }`}
          >
            {navbar.section}
          </h2>
          <ul>
            {navbar.child.map((nav) => (
              <NavLink
                to={nav.path}
                key={nav.name}
                onClick={() => {
                  if (typeof setOpen === "function") {
                    setOpen(false);
                  }
                }}
              >
                <li
                  className={`flex flex-nowrap gap-2 items-center py-2 text-[15px] px-2 rounded-[6px] transition-all ease-in-out duration-300 hover:bg-[#F3F4F8]/60 text-ellipsis
                      ${
                        nav.path === route.pathname &&
                        "text-secondary bg-[#F3F4F8]"
                      }
                        `}
                >
                  <nav.icon className="flex-shrink-0" />
                  <span
                    className={`mt-[2px] duration-300 ease-in transition-all whitespace-nowrap overflow-hidden text-ellipsis ${
                      isCollapse ? "opacity-0 w-0" : "opacity-100 w-auto"
                    }`}
                  >
                    {nav.name}
                  </span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Navbar;

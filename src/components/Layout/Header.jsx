import { useLocation } from "react-router-dom";
import { formatHeaderText } from "../../lib/helper";
import Notification from "./Notification";
import Profile from "./Profile";

const Header = () => {
  const route = useLocation();

  const headerTitle = formatHeaderText(route.pathname);

  return (
    <header className="flex justify-between items-center pb-3">
      <h1 className="text-2xl font-bold items-center">{headerTitle}</h1>
      <div className="flex gap-4 items-center">
        <Notification />
        <Profile />
      </div>
    </header>
  );
};

export default Header;

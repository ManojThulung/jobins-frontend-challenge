import Notification from "./Notification";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-2xl font-bold items-center">Dashboard</h1>
      <div className="flex gap-4 items-center">
        <Notification />
        <Profile />
      </div>
    </header>
  );
};

export default Header;

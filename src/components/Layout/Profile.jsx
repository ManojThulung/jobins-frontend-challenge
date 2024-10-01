import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LogoutIcon, ProfileIcon, SettingIcon } from "../../assets/icon";
import { NotificationList } from "../../constant";

const Profile = () => {
  const notificationNumber = NotificationList.length;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="btn-ghost relative bg-[#7367F0] hover:!bg-primary !h-9 !w-9">
          <div className="h-3 w-3 bg-[#28C76F] absolute bottom-0 right-0 border-[2px] border-white rounded-full" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="text-secondary-light text-[13px]">
          <MenuItem
            as="div"
            className="py-2 px-5 hover:bg-secondary-light/5 cursor-pointer"
          >
            <h2 className="font-semibold flex items-center gap-2">
              <span>
                <ProfileIcon className="h-[18px] w-auto" />
              </span>
              Profile
            </h2>
          </MenuItem>
          <MenuItem
            as="div"
            className="py-2 px-5 hover:bg-secondary-light/5 cursor-pointer"
          >
            <h2 className="font-semibold flex items-center gap-2">
              <span>
                <SettingIcon className="h-[18px] w-auto" />
              </span>
              Setting
            </h2>
          </MenuItem>
          <MenuItem
            as="div"
            className="py-2 px-5 hover:bg-secondary-light/5 cursor-pointer"
          >
            <h2 className="font-semibold flex items-center gap-2">
              <span>
                <LogoutIcon className="h-[18px] w-auto" />
              </span>
              Logout
            </h2>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Profile;

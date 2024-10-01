import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon } from "../../assets/icon";
import { NotificationList } from "../../constant";

const Notification = () => {
  const notificationNumber = NotificationList.length;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="btn-ghost relative">
          <p className="bg-[#EA5455] text-[13px] h-[18px] w-[18px] flex items-center justify-center rounded-full absolute font-semibold text-white top-0 right-0">
            {notificationNumber}
          </p>
          <BellIcon />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="px-5 py-3 flex text-[15px] items-center justify-between flex-nowrap border-[1px] border-b-secondary-light/5">
          <h2 className="text-secondary">Notifications</h2>
          <p className="text-secondary-light duration-150 ease-in transition-all hover:text-secondary underline text-[11px] cursor-pointer">
            View all
          </p>
        </div>
        <div className="text-secondary-light text-[13px]">
          {NotificationList.map((notity) => (
            <MenuItem
              key={notity.title}
              as="div"
              className="py-1.5 px-5 hover:bg-secondary-light/5 cursor-pointer border-[1px] border-b-secondary-light/5"
            >
              <h2 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                {notity.title}
              </h2>
              <p className="block whitespace-nowrap overflow-hidden text-ellipsis">
                {notity.description}
              </p>
              <p className="pt-[2px] text-secondary-light/70">{notity.time}</p>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Notification;

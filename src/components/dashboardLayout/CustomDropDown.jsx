import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronUpIcon } from "../../assets/icon";

const CustomDropDown = ({
  options,
  selected,
  setSelected,
  className = "w-44",
}) => {
  return (
    <div
      className={`rounded-[6px] bg-white ${className} relative text-[13px] sm:text-[15px]`}
    >
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg h-full bg-white py-1.5 pr-7 pl-3 text-left  text-secondary-light shadow-sm",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          {selected}
          <ChevronUpIcon
            className="scale-125 pointer-events-none absolute top-2.5 right-1.5 size-4 rotate-180"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "rounded-[5px] shadow-sm bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
            className
          )}
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option.name}
              className="group duration-150 ease-in flex cursor-pointer items-center gap-1.5 rounded-[5px] py-1.5 px-3 select-none data-[focus]:bg-[#F3F4F8]"
            >
              <div className="text-[13px] sm:text-sm text-secondary-light">
                {option.name}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default CustomDropDown;

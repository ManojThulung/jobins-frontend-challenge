import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Logo, MenuLeftIcon } from "../../assets/icon";
import NavItems from "./NavItems";

const MobileSidebar = ({ open, setOpen }) => {
  return (
    <Dialog className="relative z-10" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/50 bg-opacity-75 transition-opacity duration-200 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-[260px] transform transition duration-300 ease-in-out data-[closed]:-translate-x-full sm:duration-300"
            >
              <div className="flex h-full w-[260px] flex-col overflow-y-auto bg-white shadow-xl p-4 pb-6">
                <div className="flex items-center justify-between gap-1 pb-2.5 relative">
                  <div className="flex flex-grow items-center justify-start gap-1.5">
                    <Logo className={`h-8 w-7`} />

                    <h1
                      className={`font-bold text-xl transition-all duration-300 ease-in opacity-100 w-auto`}
                    >
                      JoBins
                    </h1>
                  </div>
                  <button
                    className="btn-ghost"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <MenuLeftIcon
                      className={`cursor-pointer text-secondary transition-all ease-in duration-150`}
                    />
                  </button>
                </div>

                <NavItems setOpen={setOpen} />
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default MobileSidebar;

import { ChevronUpIcon } from "../../assets/icon";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between text-[13px]">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md  bg-[#F1F2F6] px-4 py-2 font-medium text-secondary-light hover:bg-primary/10"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md  bg-[#F1F2F6] px-4 py-2 font-medium text-secondary-light hover:bg-primary/10"
        >
          Next
        </a>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-1"
          >
            <a
              href="#"
              className="relative rounded-[4px] bg-[#F1F2F6] inline-flex items-center rounded-l-md px-2 py-2 text-secondary-light hover:bg-primary/5 duration-150 ease-in focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronUpIcon
                aria-hidden="true"
                className="h-5 w-5 -rotate-90"
              />
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative rounded-[4px] bg-primary z-10 inline-flex items-center px-4 py-2 font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative rounded-[4px] bg-[#F1F2F6] inline-flex items-center px-4 py-2 font-semibold text-secondary-light hover:bg-primary/5 duration-150 ease-in focus:z-20"
            >
              2
            </a>
            <a
              href="#"
              className="relative rounded-[4px] bg-[#F1F2F6] items-center px-4 py-2 font-semibold text-secondary-light hover:bg-primary/5 duration-150 ease-in focus:z-20 md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative rounded-[4px] bg-[#F1F2F6] hidden items-center px-4 py-2 font-semibold text-secondary-light hover:bg-primary/5 duration-150 ease-in focus:z-20 md:inline-flex"
            >
              4
            </a>
            <a
              href="#"
              className="relative rounded-[4px] bg-[#F1F2F6] hidden items-center px-4 py-2 font-semibold text-secondary-light hover:bg-primary/5 duration-150 ease-in focus:z-20 md:inline-flex"
            >
              5
            </a>
            <a
              href="#"
              className="relative rounded-[4px] bg-[#F1F2F6] inline-flex items-center rounded-r-md px-2 py-2 text-secondary-light hover:bg-primary/5 duration-150 ease-in focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronUpIcon aria-hidden="true" className="h-5 w-5 rotate-90" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

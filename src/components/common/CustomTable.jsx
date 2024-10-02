import { useState } from "react";
import CustomDropDown from "../dashboardLayout/CustomDropDown";
import Pagination from "./Pagination";

const PerPageOptions = [
  { id: 10, name: 10 },
  { id: 20, name: 20 },
  { id: 30, name: 30 },
  { id: 50, name: 50 },
];

const CustomTable = ({ tableHeader, children }) => {
  const [perPage, setPerPage] = useState(10);

  return (
    <div className="card py-2 relative overflow-x-auto text-[13px] sm:text-[15px]">
      <table className="min-w-[1080px] w-full bg-white">
        <thead>
          <tr className="border-b-[1px] border-b-primary-light ">
            {tableHeader.map((header, index) => (
              <th
                key={header}
                className={`py-3 px-3 text-[13px] font-[500] uppercase text-start text-secondary-light ${
                  index === 0 ? "pl-6" : ""
                } ${index === tableHeader.length - 1 ? "pr-6" : ""}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>

      {/* TABLE FOOTER -------------------------------------------------------- */}
      <div className="p-4 text-secondary-light flex justify-between flex-wrap gap-2">
        <div className="hidden sm:flex items-center gap-2">
          <p>Showing</p>
          <CustomDropDown
            options={PerPageOptions}
            selected={perPage}
            setSelected={setPerPage}
            className={"w-16 border-[1px] border-primary-light"}
          />
          <p> of 50</p>
        </div>
        <div className="flex-1">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default CustomTable;

import React, { Fragment, useState } from "react";
import TotalSalesCard from "../components/dashboardLayout/TotalSalesCard";
import {
  CountriesReport,
  CustomerDetail,
  OrderList,
  OrderTableHeader,
  StatusOptions,
  TotalProfitReprot,
  TotalSalesReprot,
} from "../constant";
import TotalProfitCard from "../components/dashboardLayout/TotalProfitCard";
import CountryListCard from "../components/dashboardLayout/CountryListCard";
import { CustomerDetailCard } from "../components/dashboardLayout/CustomerDetailCard";
import CustomDropDown from "../components/dashboardLayout/CustomDropDown";
import { SearchIcon } from "../assets/icon";
import CustomTable from "../components/common/CustomTable";

const Dashboard = () => {
  const [activeFilter, setactiveFilter] = useState("all-orders");

  return (
    <div className="relative flex flex-col gap-4">
      {/* Top section -------------- */}
      <section className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-8 gap-4">
        <div className="col-span-1 sm:col-span-3">
          <TotalSalesCard sales={TotalSalesReprot[0]} />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <TotalProfitCard profit={TotalProfitReprot[0]} />
        </div>
        <div className="col-span-1 sm:col-span-5 lg:col-span-3">
          <CountryListCard countries={CountriesReport} />
        </div>
      </section>

      {/* CUSTOMER DETAIL & SHIPPING INFO ------------------------------- */}
      <section>
        <CustomerDetailCard
          customer={CustomerDetail}
          activeFilter={activeFilter}
          setActiveFilter={setactiveFilter}
        />
      </section>

      {/* Total Order Products ------------------------------- */}
      <section className="flex flex-col gap-4">
        {/* FILTER SECTION -------------------------------------- */}
        <div className="w-full flex gap-4 justify-between">
          <div className="flex gap-4">
            <CustomDropDown
              options={StatusOptions}
              selected={activeFilter}
              setSelected={setactiveFilter}
            />

            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="w-full xs:w-[250px] text-secondary-light outline-none pl-3 py-2 text-[15px] pr-7 rounded-[6px] shadow-sm"
              />
              <SearchIcon className="absolute top-[50%] right-[6px] translate-y-[-50%] cursor-pointer duration-150 ease-in text-secondary-light hover:text-secondary" />
            </div>
          </div>
        </div>

        {/* TABLE SECTION -------------------------------------------------- */}
        <div>
          <CustomTable tableHeader={OrderTableHeader}>
            {OrderList.map((row) => (
              <tr
                key={row.id}
                className="border-b-[1px] border-b-primary-light transition-all ease-in duration-150 hover:bg-secondary-light/5 "
              >
                {Object.values(row).map((cell, index) => (
                  <Fragment key={index}>
                    {index === 5 ? (
                      <td
                        className={`p-3 text-[13px] ${
                          cell === "Completed"
                            ? "text-[#28C76F]"
                            : "text-[#FFC600]"
                        }`}
                      >
                        {cell}
                      </td>
                    ) : index === 6 ? (
                      <td
                        className={`p-3 text-[13px] text-primary cursor-pointer duration-150 ease-in transition-all hover:text-primary/70`}
                      >
                        {cell}
                      </td>
                    ) : (
                      <td
                        className={`p-3 text-[13px] ${
                          index === 0 ? "pl-6" : ""
                        } ${
                          index === Object.values(row).length - 1 ? "pr-6" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    )}
                  </Fragment>
                ))}
              </tr>
            ))}
          </CustomTable>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

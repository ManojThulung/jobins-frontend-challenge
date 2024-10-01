import React from "react";
import TotalSalesCard from "../components/dashboardLayout/TotalSalesCard";
import {
  CountriesReport,
  TotalProfitReprot,
  TotalSalesReprot,
} from "../constant";
import TotalProfitCard from "../components/dashboardLayout/TotalProfitCard";
import CountryListCard from "../components/dashboardLayout/CountryListCard";

const Dashboard = () => {
  return (
    <div>
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
      <section></section>

      {/* Total Order Products ------------------------------- */}
      <section></section>
    </div>
  );
};

export default Dashboard;

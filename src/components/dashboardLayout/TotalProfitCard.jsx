import React from "react";
import { ArrowUpIcon, YenIcon } from "../../assets/icon";

const TotalProfitCard = ({ profit }) => {
  return (
    <div className="card p-5 flex flex-col items-center h-full justify-center">
      <div>
        <div className="flex gap-5">
          <div className="flex-shrink-0">
            <YenIcon />
          </div>
          <div className="flex-grow">
            <h1 className="font-semibold text-lg">{profit.title}</h1>
            <p className="text-secondary-light text-sm">{profit.period}</p>
          </div>
        </div>
        <h2 className="font-bold text-3xl pt-4">{profit.cost}</h2>
        <p className="text-sm text-[#1EB564] flex flex-nowrap pt-1">
          <span className="mt-[1px] flex-shrink-0 pr-1">
            <ArrowUpIcon />
          </span>{" "}
          {profit.rate}{" "}
          <span className="text-secondary-light pl-1"> vs last 7 days</span>
        </p>
      </div>
    </div>
  );
};

export default TotalProfitCard;

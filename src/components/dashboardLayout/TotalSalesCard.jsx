import { ArrowUpIcon, BusinessFianceIcon } from "../../assets/icon";

const TotalSalesCard = ({ sales }) => {
  return (
    <div className="card p-5 flex gap-x-3 justify-between h-full flex-nowrap">
      <div className="w-[38%] flex justify-center items-center">
        <BusinessFianceIcon />
      </div>

      {/* Vertical line ---------- */}
      <div className="h-full w-[1px] bg-secondary-light/50 rounded-[2px]" />

      <div className="w-[59%] flex flex-col items-center justify-center">
        <div>
          <h1 className="font-semibold text-lg">{sales.title}</h1>
          <p className="text-secondary-light text-sm">{sales.period}</p>
          <h1 className="font-bold text-3xl pt-4">{sales.cost}</h1>
          <p className="text-sm text-[#1EB564] flex flex-nowrap pt-1">
            <span className="mt-[1px] flex-shrink-0 pr-1">
              <ArrowUpIcon />
            </span>{" "}
            {sales.rate}{" "}
            <span className="text-secondary-light pl-1"> vs last 7 days</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalSalesCard;

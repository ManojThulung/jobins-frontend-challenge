import CountUp from "react-countup";
import { ChevronUpIcon } from "../../assets/icon";

const CountryListCard = ({ countries }) => {
  return (
    <div className="card p-5 flex flex-col gap-2 flex-nowrap h-full justify-center">
      {countries.map((country) => (
        <div key={country.name} className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <img
              src={country.image}
              alt={country.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="w-24">
              <h2 className="font-semibold text-[15px]">
                {country.totalNumber}
              </h2>
              <h2 className="text-[13px] text-secondary-light">
                {country.name}
              </h2>
            </div>
          </div>
          <div className="flex-grow relative bg-green-400 rounded-[6px] overflow-hidden">
            <div className="h-[6px] rounded-[6px] w-full bg-primary-light" />
            <div
              className="animate-slide-right h-[6px] rounded-[6px] bg-primary absolute top-[50%] translate-y-[-50%]"
              style={{ width: country.rate + "%" }}
            />
          </div>
          <div
            className={`flex w-[76px] justify-end items-center text-[15px] font-semibold ${
              country.isIncrease ? "text-[#28C76F]" : "text-[#EA5455]"
            }`}
          >
            <ChevronUpIcon
              className={`${country.isIncrease ? "" : "rotate-180"} mr-1`}
            />
            <p>
              <CountUp
                start={0}
                duration={2}
                scrollSpyOnce={true}
                decimals={1}
                end={country.rate}
              />
              %
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryListCard;

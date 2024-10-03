import CountUp from "react-countup";

export const CustomerDetailCard = ({
  customer,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div className="card h-full md:grid">
      <div className="flex justify-between flex-wrap gap-x-3 gap-y-4 p-5 h-full">
        <div className="flex h-full items-center justify-center w-full sm:w-[45%] md:w-[30%] gap-3 flex-shrink-0">
          <div className="aspect-square h-16 w-auto rounded-full border-[6px] border-[#7367F0] bg-[#B0A9F7]"></div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">
              {customer.name}
            </h1>
            <p className="text-[15px] text-secondary-light leading-tight">
              {customer.email}
            </p>
          </div>
        </div>

        {/* Vertical line ---------- */}
        <div className="hidden md:block h-full w-[1px] bg-secondary-light/50 rounded-[2px]" />

        <div className="w-full sm:w-[50%] md:w-[32%] text-[13px] flex sm:justify-center">
          <div>
            <h2 className="font-[500] uppercase text-secondary-light pb-1">
              PERSONAL INFORMATION
            </h2>
            <div className="flex flex-wrap gap-x-2 sm:gap-x-0 lg:gap-x-2 items-center py-1">
              <p className="w-28">Contact Number</p>
              <p className="flex-grow font-semibold">
                {customer.personal_info.contact_no}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-2 sm:gap-x-0 lg:gap-x-2 items-center py-1">
              <p className="w-28">Date of Birth</p>
              <p className="flex-grow font-semibold">
                {customer.personal_info.dob}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-2 sm:gap-x-0 lg:gap-x-2 items-center py-1">
              <p className="w-28">Member Since</p>
              <p className="flex-grow font-semibold">
                {customer.personal_info.join_member_date}
              </p>
            </div>
          </div>
        </div>

        {/* Vertical line ---------- */}
        <div className="hidden md:block h-full w-[1px] bg-secondary-light/50 rounded-[2px]" />

        <div className="w-full md:w-[30%] text-[13px] max-w-[800px]">
          <div className="flex justify-between flex-col sm:flex-row md:flex-col">
            <div className="">
              <h2 className="font-[500] uppercase text-secondary-light pb-1">
                SHIPPING ADDRESS
              </h2>
              <div className="flexitems-center">
                <p className="py-1">{customer.shipping_address}</p>
              </div>
            </div>
            <div className="py-2 flex gap-6 justify-between md:max-w-[320px]">
              <div>
                <h2 className="text-2xl font-bold">
                  <CountUp
                    start={0}
                    duration={2}
                    scrollSpyOnce={true}
                    end={customer.order_detail.total_order}
                  />
                  {/* {customer.order_detail.total_order} */}
                </h2>
                <p className="text-secondary-light">Total Order</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  <CountUp
                    start={0}
                    duration={2}
                    scrollSpyOnce={true}
                    end={customer.order_detail.completed}
                  />
                  {/* {customer.order_detail.completed} */}
                </h2>
                <p className="text-secondary-light">Completed</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  <CountUp
                    start={0}
                    duration={2}
                    scrollSpyOnce={true}
                    end={customer.order_detail.canceled}
                  />
                  {/* {customer.order_detail.canceled} */}
                </h2>
                <p className="text-secondary-light">Canceled</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="flex px-5 items-baseline justify-start text-[15px] text-secondary-light">
        <li
          onClick={() => setActiveFilter("All Orders")}
          className={`px-5 pb-4 cursor-pointer duration-150 ease-in hover:text-primary ${
            activeFilter === "All Orders"
              ? "text-primary border-b-[2px] border-b-primary"
              : ""
          }`}
        >
          All Orders
        </li>
        <li
          onClick={() => setActiveFilter("Completed")}
          className={`px-5 pb-4 cursor-pointer duration-150 ease-in hover:text-primary ${
            activeFilter === "Completed"
              ? "text-primary border-b-[2px] border-b-primary"
              : ""
          }`}
        >
          Completed
        </li>
        <li
          onClick={() => setActiveFilter("Canceled")}
          className={`px-5 pb-4 cursor-pointer duration-150 ease-in hover:text-primary ${
            activeFilter === "Canceled"
              ? "text-primary border-b-[2px] border-b-primary"
              : ""
          }`}
        >
          Canceled
        </li>
      </ul>
    </div>
  );
};

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../custom-styles/custom-datepicker.css";

const CustomDatePicker = ({
  placeholder,
  startDate,
  endDate,
  setDateRange,
}) => {
  return (
    <div className="relative w-full xs:w-[260px]">
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        isClearable={true}
        placeholderText={placeholder}
        className="w-full xs:w-[260px] text-secondary-light outline-none px-3 py-2 text-[15px] rounded-[6px] shadow-sm duration-150 ease-in transition-all hover:border-secondary-light/30 border-[2px] border-white"
        calendarClassName="custom-calendar"
      />
    </div>
  );
};

export default CustomDatePicker;

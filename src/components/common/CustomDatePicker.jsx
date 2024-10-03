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
        className="date-input"
        calendarClassName="custom-calendar"
      />
    </div>
  );
};

export default CustomDatePicker;

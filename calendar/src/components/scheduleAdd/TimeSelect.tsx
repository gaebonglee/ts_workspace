import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeOptions from "./TimeOption";
import "../../styles/scheduleAdd/TimeSelect.scss";

const TimeSelect = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="dateSelection">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        dateFormat="yyyy.MM.dd"
      />
      <select className="selectBox">
        <TimeOptions/>
      </select>
      <span>~</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date as Date)}
        dateFormat="yyyy.MM.dd"
      />
      <select className="selectBox">
        <TimeOptions />
      </select>
    </div>
  );
};

export default TimeSelect;

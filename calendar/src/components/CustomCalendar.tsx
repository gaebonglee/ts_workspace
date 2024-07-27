import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "../styles/CustomCalendar.scss";

const CustomCalendar: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Calendar
        calendarType="gregory"
        formatDay={(locale, date) => moment(date).format("D")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
        minDetail="year"
      />
    </div>
  );
};

export default CustomCalendar;

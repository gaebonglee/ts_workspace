import React from "react";
import CustomCalendar from "./CustomCalendar";
import "../styles/MainCalendar.scss";
import moment from "moment";

const MainCalendar: React.FC = () => {
  return (
    <div className="main-calendar-wrapper" style={{ width: "100%" }}>
      <CustomCalendar className="main-calendar" />
    </div>
  );
};

export default MainCalendar;

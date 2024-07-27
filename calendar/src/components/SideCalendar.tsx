import React from "react";
import CustomCalendar from "./CustomCalendar";
import "../styles/SideCalendar.scss";

const SideCalendar: React.FC = () => {
  return (
    <div className="side-calendar-wrapper" style={{ width: "100%" }}>
      <CustomCalendar className="side-calendar" />
    </div>
  );
};

export default SideCalendar;

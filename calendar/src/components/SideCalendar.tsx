import React from "react";
import Calendar from "react-calendar";
import "../styles/SideCalendar.scss";

const SideCalendar: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Calendar />
    </div>
  );
};

export default SideCalendar;

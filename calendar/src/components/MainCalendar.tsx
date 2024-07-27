import React from "react";
import Calendar from "react-calendar";
import "../styles/MainCalendar.scss";

const MainCalendar: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Calendar/>
    </div>
  );
};

export default MainCalendar;

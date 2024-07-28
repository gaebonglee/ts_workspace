import React from "react";
import Header from "../components/scheduleAdd/Header";
import Title from "../components/scheduleAdd/Title";
import Detail from "../components/scheduleAdd/Detail";
import "../styles/ScheduleAdd.scss";

const ScheduleAdd = () => {
  return (
    <div className="ScheduleAdd">
      <Header />
      <div className="schedule_cont">
        <Title />
        <Detail />
      </div>
    </div>
  );
};

export default ScheduleAdd;

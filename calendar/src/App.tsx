import React from "react";
import SideCalendar from "./components/SideCalendar";
import MainCalendar from "./components/MainCalendar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="side-calendar">
        <SideCalendar />
      </div>
      <div className="main-calendar">
        <MainCalendar />
      </div>
    </div>
  );
};

export default App;

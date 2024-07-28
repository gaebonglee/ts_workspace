import React from "react";

const generateTimeOptions = () => {
  const times = [];
  const formatTime = (hour: number, minute: number) => {
    const period = hour < 12 ? "오전" : "오후";
    const adjustedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${period} ${adjustedHour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  };

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      times.push(
        <option key={`${hour}:${minute}`} value={formatTime(hour, minute)}>
          {formatTime(hour, minute)}
        </option>
      );
    }
  }
  return times;
};

const TimeOption = () => {
  return <>{generateTimeOptions()}</>;
};

export default TimeOption;

import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

export default function AppointmentBanner({ selectedDate, setSelectedDate }) {
  return (
    <header
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

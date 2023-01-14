import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { useState } from "react";
import { format } from "date-fns";

export default function AppointmentBanner() {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
            <p>You have selected date: {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

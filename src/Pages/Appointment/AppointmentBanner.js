import React, { useState } from "react";
import Chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import AvailableAppointment from "./AvailableAppointment";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="text-black  mx-20 border-2 shadow-2xl rounded-xl">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p className="text-center">You picked: {format(date, "PP")}</p>
          </div>
        </div>
      </div>
      <AvailableAppointment />
    </section>
  );
};

export default AppointmentBanner;

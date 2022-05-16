import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const AvailableAppointment = () => {
  return (
    <div className="card w-96 text-center flex justify-center items-center text-black shadow-xl">
      <div className="card-body ">
        <h2 className="card-title">Teeth Orthodontics</h2>
        <p>8:00 AM - 9:00 Am</p>
        <p>10 SPACES AVAILABLE</p>
        <div className="card-actions ">
          <PrimaryButton>BOOK APPOINTMENT</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;

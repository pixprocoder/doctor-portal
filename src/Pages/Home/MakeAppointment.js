import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex text-black  justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-xl text-secondary font-bold">Appointment</h1>
        <h1 className="text-4xl my-3 text-white">Make an Appointment Today</h1>
        <p className="text-white mb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga
          aliquid nulla, eos dicta iusto nihil earum quos modi accusamus
          aspernatur impedit sed quidem possimus perspiciatis rem voluptates, ut
          aspernatur impedit sed quidem possimus perspiciatis rem voluptates, ut
          eius quasi ducimus quia.
        </p>
        <PrimaryButton>GET STARTED</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;

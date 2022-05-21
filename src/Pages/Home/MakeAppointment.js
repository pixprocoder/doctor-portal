import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import ButtonPrimary from "../Shared/ButtonPrimary";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1">
        <img className="mt-[-160px] hidden lg:block" src={doctor} alt="" />
      </div>
      <div className="lg:flex-1 p-4">
        <h1 className="text-secondary">Appointment</h1>
        <p className="text-3xl text-white">Make an appointment today</p>
        <p className="my-2 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam
          mollitia consequuntur enim a, nihil odio nobis quisquam natus adipisci
          quia quod blanditiis distinctio quae possimus facere id vel
          temporibus?
        </p>
        <ButtonPrimary>GET STARTED</ButtonPrimary>
      </div>
    </section>
  );
};

export default MakeAppointment;

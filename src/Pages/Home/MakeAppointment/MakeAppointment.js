import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

export default function MakeAppointment() {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="hero mt-40 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="hidden lg:block lg:w-1/2 -mt-44"
            alt=""
          />
          <div>
            <h2 className="text-xl text-white font-bold text-secondary">
              Appointment
            </h2>
            <h1 className="text-4xl text-white font-bold">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Book Now</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";
import Footer from "../Shared/Footer/Footer";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <section>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </section>
  );
};

export default Appointment;

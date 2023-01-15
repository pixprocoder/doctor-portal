import { format } from "date-fns";
import React from "react";

export default function AvailableAppointments({ selectedDate }) {
  return (
    <section>
      <p className="text-secondary font-bold text-center my-6">
        Available Services on: {format(selectedDate, "PP")}
      </p>
    </section>
  );
}

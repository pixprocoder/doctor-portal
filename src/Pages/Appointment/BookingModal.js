import { format } from "date-fns";
import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots, _id } = treatment;
  const formattedDate = format(date, "PP");
  const [user] = useAuthState(auth);
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      slot,
      date: formattedDate,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    //  SANDING DATA TO THE SERVER
    const url = `http://localhost:5000/booking`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(
            `Your appointment booked in ${formattedDate} at ${slot}`
          );
        } else {
          toast.error(
            `Already have an appointment on ${data.exist?.date} at ${data.exist?.slot}`
          );
        }
        setTreatment(null);
      });
  };

  return (
    <section>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg flex items-center justify-between ">
            {name}
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle ">
              ✕
            </label>
          </h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              readOnly
              value={format(date, "PP")}
              className="input w-full input-bordered text-xl mt-4"
            />
            <select
              name="slot"
              className="select select-bordered w-full  my-3 "
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              readOnly
              type="text"
              placeholder="Name"
              value={user?.displayName}
              className="input w-full input-bordered "
            />
            <input
              readOnly
              type="email"
              placeholder="Email"
              value={user?.email}
              className="input w-full input-bordered my-3"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input w-full input-bordered "
            />
            <input
              type="submit"
              value="SUBMIT"
              className="btn w-full mt-3 bg-gradient- to-r from-secondary to-primary"
              htmlFor="booking-modal"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;

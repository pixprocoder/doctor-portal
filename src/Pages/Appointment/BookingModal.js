import { format } from "date-fns";
import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user] = useAuthState(auth);
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
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
              value={format(date, "pp")}
              className="input w-full input-bordered text-xl mt-4"
            />
            <select
              name="slot"
              className="select select-bordered w-full  my-3 "
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
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

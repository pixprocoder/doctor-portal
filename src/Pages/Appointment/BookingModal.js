import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    setTreatment(null);
  };

  return (
    <section>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg flex items-center justify-between ">
            {name}
            <label for="booing-modal" class="btn btn-sm btn-circle ">
              ✕
            </label>
          </h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              readOnly
              value={format(date, "pp")}
              class="input w-full input-bordered text-xl mt-4"
            />
            <select name="slot" class="select select-bordered w-full  my-3 ">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              class="input w-full input-bordered "
            />
            <input
              type="email"
              placeholder="Email"
              class="input w-full input-bordered my-3"
            />
            <input
              type="text"
              placeholder="Phone"
              class="input w-full input-bordered "
            />
            <input
              type="submit"
              value="SUBMIT"
              class="btn w-full mt-3"
              for="booking-modal"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;

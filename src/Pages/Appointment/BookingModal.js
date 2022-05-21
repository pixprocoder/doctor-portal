import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
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
          <div>
            <input
              type="text"
              readOnly
              value={format(date, "pp")}
              class="input w-full input-bordered text-xl mt-4"
            />
            <select class="select select-bordered w-full text-base my-3 ">
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
          </div>
          <div class="modal-action">
            <label for="booking-modal" class="btn w-full">
              SUBMIT
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;

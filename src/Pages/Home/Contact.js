import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className=" text-center  py-8">
        <h1 className="text-secondary ">Contact us</h1>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <div className="w-3/6 mx-auto flex flex-col">
        <input
          type="email"
          placeholder="Your Email"
          class="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Subject"
          class="input input-bordered w-full my-4"
        />
        <textarea
          class="textarea textarea-bordered"
          placeholder="Your massage"
        ></textarea>
      </div>
    </section>
  );
};

export default Contact;

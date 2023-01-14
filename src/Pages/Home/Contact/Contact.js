import React from "react";
import appointment from "../../../assets/images/appointment.png";

export default function Contact() {
  return (
    <section
      className="py-16 my-10"
      style={{ background: `url(${appointment})` }}
    >
      <div className="my-6">
        <h1 className="text-secondary text-center text-xl ">Get In Touch</h1>
        <h3 className="text-4xl text-white text-center ">
          Stay Connected With Us!
        </h3>
      </div>
      <div className="pb-2">
        <form className="flex  space-y-2 flex-col w-1/2 mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-x"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-x"
          />
          <textarea
            className="textarea textarea-bordered"
            placeholder="Your message"
          ></textarea>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white block mx-auto">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

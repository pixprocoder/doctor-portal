import React from "react";
import img from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Contact = () => {
  return (
    <section
      style={{ background: `url(${img})` }}
      className="border-2 flex justify-center items-center flex-col"
    >
      <div className="my-4">
        <h1 className="uppercase text-secondary text-center">Contact us</h1>
        <h1 className="text-3xl mb-6">STAY CONNECTED WITH US</h1>
      </div>
      <form>
        <input
          type="email"
          placeholder="Email address"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full my-2"
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Text here"
        ></textarea>
        <input
          className="btn btn-primary block mx-auto my-2 text-white uppercase font-bold bg-gradient-to-r from-cyan-500 to-blue-500"
          type="submit"
          value="Submit"
        />
      </form>
    </section>
  );
};

export default Contact;

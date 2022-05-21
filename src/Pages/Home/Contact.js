import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="py-8 mt-10"
      style={{ background: `url(${appointment})` }}
    >
      <div className=" text-center  py-4">
        <h1 className="text-secondary ">Contact us</h1>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <form className="w-3/6 mx-auto flex flex-col">
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full my-4"
        />
        <textarea
          className="textarea textarea-bordered"
          placeholder="Your massage"
        ></textarea>
        <input
          className="d-block mx-auto btn btn-primary mt-4"
          type="submit"
          onClick={handleSubmit}
          value="SUBMIT"
        />
      </form>
    </section>
  );
};

export default Contact;

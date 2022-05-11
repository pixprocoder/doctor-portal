import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            This is doctor portal office. we can help people so soon as we can{" "}
            <br />
            so if you are looking someone please let's get started.
          </p>
          <button className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero min-h-screen  text-black">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            This is doctor portal office. we can help people so soon as we can{" "}
            <br />
            so if you are looking someone please let's get started.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

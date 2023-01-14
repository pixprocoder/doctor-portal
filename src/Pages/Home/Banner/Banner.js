import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

export default function Banner() {
  const myStyle = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle} className="hero py-28">
      <div className="hero-content px-6 flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="hidden lg:w-1/2  lg:block  rounded-lg shadow-xl"
          alt=""
        />
        <div>
          <h1 className="text-3xl font-bold">Welcome to our world!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Explore now
          </button>
        </div>
      </div>
    </div>
  );
}

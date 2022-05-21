import React from "react";
import Chair from "../../assets/images/chair.png";
import ButtonPrimary from "../Shared/ButtonPrimary";

const HomeBanner = () => {
  return (
    <section>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold ">Your new smile start here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <ButtonPrimary>GET STARTED</ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

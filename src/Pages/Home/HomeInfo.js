import React from "react";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const HomeInfo = () => {
  return (
    <section className="flex flex-wrap gap-4">
      <div class="card max-w-sm mx-auto shadow-xl">
        <div class="card-body bg-gradient-to-r from-secondary to-primary items-center flex justify-between flex-row">
          <div className="mr-6">
            <img src={clock} alt="" />
          </div>
          <div>
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      <div class="card max-w-sm mx-auto shadow-xl">
        <div class="card-body bg-accent items-center flex justify-between flex-row">
          <div className="mr-6">
            <img src={location} alt="" />
          </div>
          <div>
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      <div class="card max-w-sm mx-auto shadow-xl">
        <div class="card-body bg-gradient-to-r from-secondary to-primary items-center flex justify-between flex-row">
          <div className="mr-6">
            <img src={phone} alt="" />
          </div>
          <div>
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;

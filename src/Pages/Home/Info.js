import React from "react";
import Icon1 from "../../assets/icons/clock.svg";
import Icon2 from "../../assets/icons/marker.svg";
import Icon3 from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className=" grid grid-cols-3 justify-items-center">
      <div class="card w-96 bg-base-100 shadow-xl  border-2">
        <div class="card-body">
          <div class="flex  justify-between items-center">
            <div className="  mr-4">
              <img src={Icon1} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-8">Opening Hours</h1>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl  border-2">
        <div class="card-body">
          <div class="flex  justify-between items-center">
            <div className="  mr-4">
              <img src={Icon2} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-8">
                Visit our location
              </h1>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl  border-2">
        <div class="card-body">
          <div class="flex  justify-between items-center">
            <div className="  mr-4">
              <img src={Icon3} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-8">Contact us now</h1>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

import React from "react";
import treatment from "../../assets/images/treatment.png";
import img1 from "../../assets/images/fluoride.png";
import img2 from "../../assets/images/cavity.png";
import img3 from "../../assets/images/whitening.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Services = () => {
  return (
    <div className="text-black bg-white ">
      <div className="my-20">
        <h1 className="text-center text-secondary text-2xl uppercase">
          Our services
        </h1>
        <p className="text-3xl font-bold text-center uppercase ">
          Services we provide
        </p>
      </div>

      {/* Services card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <div class="card lg:max-w-lg  shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Fluoride Treatment</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div class="card lg:max-w-lg  shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Cavity Filling</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div class="card lg:max-w-lg  shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Teeth Whitening Copy</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>

      {/* Banner  */}

      <div class="hero min-h-screen  ">
        <div class="hero-content flex-col lg:flex-row mb-14">
          <img
            src={treatment}
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl"
            alt="treatment"
          />
          <div className="lg:ml-40 text-center lg:text-left">
            <h1 class="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

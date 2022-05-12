import React from "react";
import img1 from "../../assets/images/people1.png";
import img2 from "../../assets/images/people2.png";
import img3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";

const Review = () => {
  return (
    <section className=" text-black mb-10">
      <div className="flex justify-around lg:justify-between items-center">
        <div>
          <h1 className="text-secondary text-xl">Testimonial</h1>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        <div className="card max-w-sm md:max-w-md lg:max-w-7xl  shadow-xl flex flex-col  px-8 py-4 ">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              voluptatibus ab quod optio! Sequi alias officiis sed at quia et
              eum ea!
            </p>
          </div>
          <div className="flex mt-4">
            <div className="avatar mr-6">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img1} alt="review" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base">Shan watson</h1>
              <p>USA</p>
            </div>
          </div>
        </div>
        <div className="card max-w-sm md:max-w-md lg:max-w-7xl  shadow-xl flex flex-col  px-8 py-4 ">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              voluptatibus ab quod optio! Sequi alias officiis sed at quia et
              eum ea!
            </p>
          </div>
          <div className="flex mt-4">
            <div className="avatar mr-6">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img2} alt="review" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base">Sultana</h1>
              <p>UK</p>
            </div>
          </div>
        </div>
        <div className="card max-w-sm md:max-w-md lg:max-w-7xl  shadow-xl flex flex-col  px-8 py-4 ">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              voluptatibus ab quod optio! Sequi alias officiis sed at quia et
              eum ea!
            </p>
          </div>
          <div className="flex mt-4">
            <div className="avatar mr-6">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img3} alt="review" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base">Alexa nassy</h1>
              <p>BANGLADESH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

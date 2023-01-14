import React from "react";

export default function Testimonial({ testimonial }) {
  const { name, review, img, location } = testimonial;
  return (
    <section>
      <div className="card shadow-xl rounded-lg ">
        <div className="card-body">
          <p>{review}</p>
          <div className="flex mt-5 ">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="ml-6">
              <h1 className="text-xl font-bold">{name}</h1>
              <h5>{location}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

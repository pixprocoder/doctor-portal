import React from "react";

const Review = ({ review }) => {
  const { name, img, desc, location } = review;
  return (
    <section>
      <div className="card max-w-sm mx-auto shadow-xl ">
        <div className="card-body   flex justify-between flex-col ">
          <div>
            <p>{desc}</p>
          </div>
          <div className="flex items-center">
            <div className="avatar mr-4">
              <div className="w-20 rounded-full">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">{name}</p>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

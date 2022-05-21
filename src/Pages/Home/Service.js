import React from "react";

const Service = ({ service }) => {
  const { name, img, desc } = service;
  return (
    <section>
      <div class="card max-w-sm mx-auto shadow-xl">
        <div
          className={`card-body  items-center flex justify-between flex-col `}
        >
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h2 className="text-center text-3xl" class="card-title">
              {name}
            </h2>
            <p className="text-center ">{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

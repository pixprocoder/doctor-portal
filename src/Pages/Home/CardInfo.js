import React from "react";

const CardInfo = ({ img, cardTitle, bgClass }) => {
  return (
    <section>
      <div class="card max-w-sm mx-auto shadow-xl">
        <div
          className={`card-body  items-center flex justify-between flex-row ${bgClass}`}
        >
          <div className="mr-6">
            <img src={img} alt="" />
          </div>
          <div>
            <h2 class="card-title">{cardTitle}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInfo;

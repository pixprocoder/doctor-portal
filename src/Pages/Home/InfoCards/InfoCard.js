import React from "react";

export default function InfoCard({ card }) {
  const { name, img, description, bgClass } = card;
  return (
    <div className={`card p-6 text-white card-side ${bgClass}  shadow-xl`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

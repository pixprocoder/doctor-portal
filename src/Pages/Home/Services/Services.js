import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

export default function Services() {
  const serviceData = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="py-10">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-1 text-secondary uppercase">
          our services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid pt-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

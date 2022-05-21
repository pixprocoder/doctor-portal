import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride treatment",
      desc: "Fluoride is a treatment this is good for everyone and we should must use this service ",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      desc: "Fluoride is a treatment this is good for everyone and we should must use this service ",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth whitening",
      desc: "Fluoride is a treatment this is good for everyone and we should must use this service ",
      img: whitening,
    },
  ];
  return (
    <section>
      <div className="text-center my-32">
        <h1 className="text-secondary text-xl">Our services</h1>
        <h1 className="text-5xl">Services we provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

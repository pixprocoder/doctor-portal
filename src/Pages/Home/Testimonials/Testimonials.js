import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonialData = [
    {
      _id: 1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      name: "Winson Herry",
      location: "California",
    },
    {
      _id: 2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      name: "Jhanker Mahbub",
      location: "Usa",
    },
    {
      _id: 3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      name: "codeWithHerry",
      location: "Bangladesh",
    },
  ];
  return (
    <section className="my-6">
      <div className="flex items-center justify-between my-4">
        <div>
          <h2 className="text-secondary font-bold text-xl">Testimonial</h2>
          <h2 className=" text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-36" src={quote} alt="" />
        </figure>
      </div>
      {/* Testimonial */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonialData.map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

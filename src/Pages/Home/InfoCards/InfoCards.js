import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

export default function InfoCards() {
  const infoData = [
    {
      _id: 1,
      name: "Opening hours",
      description:
        "We are available 24/7 hours in a day. so you can find us every time",
      img: clock,
      bgClass: "bg-primary",
    },
    {
      _id: 2,
      name: "Visit our Location",
      description: "Brooklyn, NY 10036, United States.",
      img: marker,
      bgClass: "bg-accent",
    },
    {
      _id: 3,
      name: "Contact Us",
      description: "You can contact us : 000 000 000 00",
      img: phone,
      bgClass: "bg-primary",
    },
  ];
  return (
    <div className="gap-6 my-10 grid lg:grid-cols-3 md:grid-cols-2">
      {infoData.map((card) => (
        <InfoCard key={card._id} card={card} />
      ))}
    </div>
  );
}

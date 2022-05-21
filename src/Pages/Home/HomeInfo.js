import { accent } from "daisyui/src/colors";
import React from "react";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import CardInfo from "./CardInfo";
const HomeInfo = () => {
  return (
    <section className="flex flex-wrap gap-4">
      <CardInfo
        cardTitle="Opening hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <CardInfo
        cardTitle="Visit our location"
        img={location}
        bgClass="bg-accent"
      />
      <CardInfo
        cardTitle="Contact us now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      />
    </section>
  );
};

export default HomeInfo;

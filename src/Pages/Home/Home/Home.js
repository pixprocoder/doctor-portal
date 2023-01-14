import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import ServiceSpacial from "../Services/ServiceSpacial";

export default function Home() {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <ServiceSpacial />
    </div>
  );
}

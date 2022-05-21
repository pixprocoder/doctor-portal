import React from "react";
import HomeBanner from "./HomeBanner";
import HomeInfo from "./HomeInfo";
import MakeAppointment from "./MakeAppointment";
import ServiceBanner from "./ServiceBanner";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeInfo />
      <Services />
      <ServiceBanner />
      <MakeAppointment />
      <Testimonial />
    </div>
  );
};

export default Home;

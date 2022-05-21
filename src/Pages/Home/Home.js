import React from "react";
import HomeBanner from "./HomeBanner";
import HomeInfo from "./HomeInfo";
import ServiceBanner from "./ServiceBanner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeInfo />
      <Services />
      <ServiceBanner />
    </div>
  );
};

export default Home;

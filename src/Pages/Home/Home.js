import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Review from "./Review";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Info />
        <Services />
        <MakeAppointment />
        <Review />
      </div>
    </>
  );
};

export default Home;

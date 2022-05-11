import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
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
        <Contact />
      </div>
    </>
  );
};

export default Home;

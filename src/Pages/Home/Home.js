import React from "react";
import Footer from "../Shared/Footer/Footer";
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
        <Footer />
      </div>
    </>
  );
};

export default Home;

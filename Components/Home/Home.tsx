import React from "react";
import Hero from "./Hero/Hero";
import Nationalities from "./Nationalities/Nationalities";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviwe from "./Reviwe/Reviwe";
import News from "./News/News";
import NewsEmail from "./NewsEmail/NewsEmail";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Nationalities />
      <Hotel />
      <WhyChoose />
      <Reviwe />
      <News />
      <NewsEmail />
    </div>
  );
};

export default Home;

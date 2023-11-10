import React from "react";
import HeroSection from "./components/HeroSection";

function About() {
  const mydata = {
    names: "About Store",
  };
  return <HeroSection name={mydata.names} />;
}

export default About;

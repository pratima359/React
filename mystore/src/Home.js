import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import { useProductsContext } from "./context/productcontext";
import FeatureProduct from "./components/FeatureProduct";

function Home() {
  return (
    <>
      <HeroSection />
      <FeatureProduct />
      <Services />
    </>
  );
}

export default Home;

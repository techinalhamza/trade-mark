import React from "react";
import HomeSlider from "./HomeSlider";
import { Button } from "@mui/material";
import "./Home.css";
import { boxData } from "../../data";
import HomeBoxes from "./HomeBoxes";
import Brands from "../../components/brands/Brands";
import FeatureProduct from "../../components/feature-product/FeatureProduct";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="container-content">
          <HomeSlider />
          <HomeBoxes />
          <Brands />
          <FeatureProduct />
        </div>
      </div>
    </>
  );
}

export default Home;
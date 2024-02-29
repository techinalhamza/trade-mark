import React from "react";
import HomeSlider from "./HomeSlider";
import { Button } from "@mui/material";
import "./Home.css";
import { boxData, dropdownItems } from "../../data";
import HomeBoxes from "./HomeBoxes";
import Brands from "../../components/brands/Brands";
import FeatureProduct from "../../components/feature-product/FeatureProduct";
import Banner from "../../components/banner/Banner";
import Blogs from "../../components/blogs/Blogs";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="container-content">
          <HomeSlider />
          <HomeBoxes />
          <Brands />
          <FeatureProduct />
          <Banner />
          <Blogs />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

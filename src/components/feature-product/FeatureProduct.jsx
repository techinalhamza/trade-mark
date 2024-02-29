import React, { useState } from "react";
import img1 from "../../assets/feature-product1.jpg";
import { Button, Rating } from "@mui/material";
import "./FeatureProduc.css";
import { featureProductData } from "../../data";
import { FaChartBar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

function FeatureProduct() {
  const [hoveredImages, setHoveredImages] = useState(
    Array(featureProductData.length).fill(false)
  );
  console.log(hoveredImages);
  const handleMouseEnter = (index) => {
    const updatedHoveredImages = [...hoveredImages];
    updatedHoveredImages[index] = true;
    setHoveredImages(updatedHoveredImages);
  };
  const handleMouseLeave = (index) => {
    const updatedHoveredImages = [...hoveredImages];
    updatedHoveredImages[index] = false;
    setHoveredImages(updatedHoveredImages);
  };
  return (
    <>
      <div className="feature-product-container h-max overflow-hidden  ">
        <div className="container-fluid">
          <div className="hd">FEATURED PRODUCTS</div>
          <div className="product-box h-max mb-6 ">
            {featureProductData.map((val, index) => {
              return (
                <>
                  <div
                    className="product-card overflow-hidden   transition-all h-[rem] hover:h-[rem] hoverscale-105
                   border px-4 py-8 hover:shadow-2xl"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <div className="img">
                      <img
                        src={
                          hoveredImages[index] ? val.hoveredImg : val.defaultImg
                        }
                        alt=""
                        className="transition- transition-opacity"
                      />
                    </div>
                    <div className="info flex flex-col   gap-2">
                      <Rating defaultValue={4} className="ratting" />

                      <h1 className="text-[rgb(39, 129, 184)] text-sm ">
                        {val.title}
                      </h1>
                      <div className="price">
                        <p>starting price:</p>
                        <strong>{val.price}</strong>
                        <span>{val.productType}</span>
                      </div>

                      <div className="color-box flex gap-2 ">
                        {val.colors.map((colorObj, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="box"
                            style={{ backgroundColor: colorObj.color }}
                          ></div>
                        ))}
                      </div>
                      <div className="buttons flex items-center justify-between mt-12 ">
                        <Button>full details</Button>
                        <div className="compare box">
                          <FaChartBar />
                        </div>
                        <div className="wishlist box">
                          <FaRegBookmark />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;

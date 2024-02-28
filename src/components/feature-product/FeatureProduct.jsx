import React from "react";
import img1 from "../../assets/feature-product1.jpg";
import { Button, Rating } from "@mui/material";
import "./FeatureProduc.css";
import { featureProductData } from "../../data";
import { FaChartBar } from "react-icons/fa";

import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
function FeatureProduct() {
  // const colors = [
  //   "#F4DFAE",
  //   "#403D36",
  //   "#F9F2E8",
  //   "#D7D2CE",
  //   "#00000C",
  //   "#E5C043",
  // ];
  console.log(featureProductData.colors);
  return (
    <>
      <div className="feature-product-container  ">
        <div className="container-fluid">
          <div className="hd">FEATURED PRODUCTS</div>
          <div className="product-box h-[35rem] ">
            {featureProductData.map((val, index) => {
              return (
                <>
                  <div
                    className="product-card overflow-hidden   transition-all h-[28rem] hover:h-[33rem] hover:scale-105
                   border px-4 py-8 hover:shadow-2xl"
                  >
                    <div className="img">
                      <img src={val.img} alt="" />
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
                      <div className="buttons flex items-center justify-between  ">
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

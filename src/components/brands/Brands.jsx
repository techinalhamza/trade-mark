import React, { useState } from "react";
import { brandData, customerData } from "../../data";
import "./Brand.css";
function Brands() {
  const [brand, setBrand] = useState(0);
  return (
    <>
      <div className="brand-container my-8  ">
        <div className="container-fluid ">
          <div className="heading w-  flex items-center gap-8">
            <div className="hd " onClick={() => setBrand(0)}>
              OUR CUSTOMERS
            </div>
            <div className="hd " onClick={() => setBrand(1)}>
              brands
            </div>
          </div>
          {brand === 0 && (
            <div className="brand-box mt-8">
              {customerData.map((val) => {
                return (
                  <>
                    <div className="img">
                      <img src={val.custimg} alt="" />
                    </div>
                  </>
                );
              })}
            </div>
          )}
          {brand === 1 && (
            <div className="brand-box mt-8">
              {brandData.map((val) => {
                return (
                  <>
                    <div className="img">
                      <img src={val.brandimg} alt="" />
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Brands;

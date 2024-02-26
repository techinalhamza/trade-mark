import React from "react";
import "./Header.css";
import Topheader from "./Topheader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";
import { FaTruck } from "react-icons/fa6";
import { Rating } from "@mui/material";

function Header() {
  return (
    <>
      <header>
        <div className="header-container ">
          <div className="container-content">
            <Topheader />
            <MiddleHeader />
            <Navbar />
            <div className="shipping-message py-2 border-b-2">
              <div className="container-fluid">
                <div className="content flex items-center gap-2 justify-center">
                  <FaTruck className="truck" />
                  <span className="text-sm text-[#2781B8]">
                    Free Shipping on Orders Above $300
                  </span>
                  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <Rating
                    className="rating"
                    defaultValue={5}
                    name="half-rating"
                  />
                  <span className="text-sm  text-[#2781B8]">
                    5 stars reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

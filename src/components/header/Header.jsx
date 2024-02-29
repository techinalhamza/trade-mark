import React from "react";
import "./Header.css";
import Topheader from "./Topheader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <header>
        <div className="header-container ">
          <div className="container-content">
            <Topheader />
            <MiddleHeader />
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

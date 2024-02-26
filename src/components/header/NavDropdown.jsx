import React from "react";
import drpimg from "../../assets/dropdown-img.jpg";
function NavDropdown() {
  return (
    <>
      <div className="department-dropdown">
        <h1 className="uppercase font-bold text-2xl mb-4">all department</h1>
        <div className="items flex gap-12">
          <ul>
            <li>Door Weatherstripping & Door Seals</li>
            <li>Door Thresholds, Ramps & Stair Hardware</li>
            <li>Door Hardware</li>
            <li>Door Hardware</li>
            <li>Hinges</li>
            <li>Sliding Doors & Sliding Cabinet Doors</li>
            <li>Flood Barriers & Door Dam</li>
            <li>Cabinet Hardware</li>
            <li>LED Lights</li>
          </ul>
          <ul>
            <li>Bathroom Accessories</li>
            <li>Emtek Door Hardware</li>
            <li>SHOP BY BRAND</li>
          </ul>
          <div className="items-img w-72 h-auto ml-auto">
            <img src={drpimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavDropdown;

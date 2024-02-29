import React from "react";
import drpimg from "../../assets/dropdown-img.jpg";
// import { dropdownItems } from "../../data";

function NavDropdown({ data }) {
  console.log(data);
  return (
    <>
      <div className="department-dropdown">
        <h1 className="uppercase font-bold text-2xl mb-4 text-left">
          all department
        </h1>
        <div className="items flex gap-12 text-left">
          {/* <ul>
            {data.map((val) => (
              <li>{val}</li>
            ))}
          </ul> */}

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
          <div className="items-img w-72 h-64 ml-auto">
            <img src={drpimg} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavDropdown;

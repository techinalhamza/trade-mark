import React from "react";
import logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
function MiddleHeader() {
  return (
    <>
      <div className="middle-container my-">
        <div className="container-fluid">
          <div className=" flex items-center ">
            <div className="co flex items-center gap-2 w-[20%]">
              <div className="logo ">
                <img src={logo} alt="" className="w-[] " />
              </div>
            </div>
            <div className="co w-[50%]">
              <div className="search-bar w-full border flex items-center ">
                <input
                  type="search"
                  className="w-[100%]  p-3 outline-none "
                  placeholder="search here...."
                />
                <IoIosSearch />
              </div>
            </div>
            <div className="co flex justify-end gap-3 ml-auto w-[30%]">
              <div className="box ">
                <FaRegUser />
                <h2>account</h2>
              </div>
              <div className="box ">
                <FaChartBar />
                <h2>compare</h2>
              </div>
              <div className="box ">
                <FaRegBookmark />
                <h2>favorite</h2>
              </div>
              <div className="box ">
                <BsCart3 />
                <h2>items</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleHeader;

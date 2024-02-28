import React from "react";
import logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

function MiddleHeader() {
  return (
    <>
      <div className="middle-container my-4">
        <div className="container-fluid">
          <div className="row flex items-center">
            <div className="col-2">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="search-bar w-full border flex items-center ">
                <input
                  type="search"
                  className="w-[95%]  p-3 outline-none "
                  placeholder="search here...."
                />
                <IoIosSearch />
              </div>
            </div>
            <div className="col-4 flex justify-end gap-3 ml-auto">
              <div className="box ">
                <FaRegUser />
                <h2>account</h2>
              </div>
              <div className="box ">
                <FaChartBar />
                <h2>account</h2>
              </div>
              <div className="box ">
                <FaRegBookmark />
                <h2>account</h2>
              </div>
              <div className="box ">
                <BsCart3 />
                <h2>account</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleHeader;

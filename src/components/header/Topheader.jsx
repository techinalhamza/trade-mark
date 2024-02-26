import React from "react";
import { FaTwitter } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Topheader() {
  return (
    <>
      <div className="top-header-container bg-[#F1F3F7] w-full">
        <div className="container-fluid">
          <div className="top-header flex items-center justify-between">
            <div className="left-sec flex items-center gap-2 ">
              <FaTwitter />
              <PiPhoneCallFill />
              <div className="num text-sm">
                855-688-1388 &nbsp;&nbsp; / &nbsp;&nbsp;845-388-1300
              </div>
            </div>
            <div className="right-sec lowercase">
              <Button className="">$50 minimum purchase required*</Button>
              <Button>
                <Link>FAQ</Link>
              </Button>
              <Button>
                <Link>bulk discount</Link>
              </Button>
              <Button>
                <Link>contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topheader;

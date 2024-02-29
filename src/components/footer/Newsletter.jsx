import { Button } from "@mui/material";
import React from "react";

function Newsletter() {
  return (
    <>
      <div className="newsletter w-full bg-[#2781B8] mb">
        <div className="container-fluid">
          <div className="row py-6 flex items-center">
            <div className="col-6">
              <h1 className="text-2xl text-white">
                Sign up for Trademark Hardware Inc news
              </h1>
            </div>
            <div className="col-6  flex gap-4 ">
              <input
                type="email"
                className="px-2 w-96 h-[40px] rounded-sm outline-none "
                placeholder="enter your email "
              />

              <Button style={{ backgroundColor: "#FFC62A" }}>subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;

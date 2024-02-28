import React from "react";
import { boxData } from "../../data";
import { Button } from "@mui/material";

function HomeBoxes() {
  return (
    <>
      <div className="box-container  mt-8">
        <div className="box  container-fluid ">
          {boxData.map((val, index) => {
            return (
              <div
                key={index}
                className="  p-0 box-item h-52  overflow-hidden relative  bg-red-200 "
                style={{
                  backgroundImage: `url(${val.bgImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="info text-white absolute top-[80%] px-4">
                  <h1 className="text-3xl font-semibold">{val.title}</h1>
                  <p className="py-4">{val.desc}</p>

                  <Button>read more</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomeBoxes;

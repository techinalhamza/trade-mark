import React from "react";
import banner from "../../assets/banner.jpg";

function Banner() {
  return (
    <>
      <div className="banner-container">
        <div
          className="containe  bg-black"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "99vw",
            // height: "30rem",
          }}
        >
          <div className="banner-data flex items-center h-full ">
            <div className="banner-info w-96 ml-56 my-12">
              <h1 className="text-4xl mb-4 text-[#133A82]">
                safety finger guards
              </h1>
              <p className="text-center leading-7 font-semibold">
                Get protection for your loved ones from injuries resulting from
                door slams and collisions! Schools and Child Care Centers or a
                DIY homeowner looking for safeguards against door injuries, we
                have just what you’re looking for
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

import React from "react";
import Slider from "react-slick";
import silder1 from "../../assets/slider1.jpg";
import silder2 from "../../assets/slider2.jpg";
import silder3 from "../../assets/slider3.jpg";
function HomeSlider() {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    adaptiveHeight: true,
  };
  return (
    <>
      <div className="slider-container">
        <div className="container-fluid">
          <div className="slider border ">
            <div className="container-flui">
              <Slider {...settings}>
                <div className="img w-[100%] ">
                  <img
                    src={silder1}
                    alt=""
                    className="w-[100%]  h-[vh] object-cover"
                  />
                </div>
                <div className="img w-[100%]">
                  <img src={silder2} alt="" className="w-[100%] h-[vh] " />
                </div>
                <div className="img w-[100%]">
                  <img src={silder3} alt="" className="w-[100%] h-[vh] " />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;

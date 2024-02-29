import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import NavDropdown from "./NavDropdown";
import { FaTruck } from "react-icons/fa6";
import { Rating } from "@mui/material";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownItems, setdropdownItems] = useState([
    "Door Weatherstripping & Door Seals",
    "Door Thresholds, Ramps & Stair Hardware",
    "Door Hardware",
    "Door Hardware",
    "Hinges",
    "Sliding Doors & Sliding Cabinet Doors",
    "Flood Barriers & Door Dam",
    "Cabinet Hardware",
    "LED Lights",
    "Bathroom Accessories",
    "Emtek Door Hardware",
    "SHOP BY BRAND",
  ]);
  const navRef = useRef();
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     let position = window.pageYOffset;
  //     if (position > 100) {
  //       navRef.current.classList.add("fixed");
  //     } else {
  //       navRef.current.classList.remove("fixed");
  //     }
  //   });
  // }, []);

  return (
    <>
      <nav>
        <div className="nav-container bg-[#454B54] w-fuLl py-" ref={navRef}>
          <div className="container-fluid">
            <div
              className={`links relative w-full   text-center ${
                showMenu ? "active" : ""
              }  `}
            >
              <div className="ham-menu " onClick={() => setShowMenu(!showMenu)}>
                <RxHamburgerMenu
                  style={{
                    position: "fixed",
                    color: "black",
                    top: "1.7%",
                    left: "20%",
                    fontSize: "1.5rem",
                    zIndex: "11111",
                  }}
                />
              </div>

              <div className="department inline-block relatve">
                <Button>
                  <Link>all department</Link>
                </Button>
                <NavDropdown data={dropdownItems} />
              </div>
              <span>|</span>
              <div className="doorseal inline-block">
                <Button>
                  <Link>door seal</Link>
                </Button>
                <NavDropdown />
              </div>
              <span>|</span>
              <Button>
                <Link>door Thresholds</Link>
              </Button>
              <span>|</span>
              <Button>
                <Link>door Hardware</Link>
              </Button>
              <span>|</span>
              <Button>
                <Link>door Accessories</Link>
              </Button>
              <span>|</span>
              <Button>
                <Link>Hinges</Link>
              </Button>
              <span>|</span>
              <Button>
                <Link>Sliding</Link>
              </Button>
              <span>|</span>
              <Button>
                <Link>Flood Barriers</Link>
              </Button>
              <span>|</span>
              <Button>
                <Link>cabinet</Link>
              </Button>
            </div>
          </div>
          <div className="shipping-message py-2 border-b-2 bg-white">
            <div className="container-fluid">
              <div className="content flex items-center gap-2 justify-center">
                <FaTruck className="truck" />
                <span className="text-sm text-[#2781B8]">
                  Free Shipping on Orders Above $300
                </span>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <Rating
                  className="rating"
                  defaultValue={5}
                  name="half-rating"
                />
                <span className="text-sm  text-[#2781B8]">5 stars reviews</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

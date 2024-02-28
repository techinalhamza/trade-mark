import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import NavDropdown from "./NavDropdown";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-container bg-[#454B54] w-fuLl py- ">
          <div className="container-fluid">
            <div className="links relative w-full borde  text-center">
              <div className="department inline-block relatve">
                <Button>
                  <RxHamburgerMenu />
                  <Link>all department</Link>
                </Button>
                <NavDropdown />
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;

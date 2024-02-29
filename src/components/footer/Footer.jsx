import React from "react";
import Newsletter from "./Newsletter";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";
import secure from "../../assets/secure90x72.gif";
import seal from "../../assets/Seal.jpeg";
import FooterBottom from "./FooterBottom";
function Footer() {
  return (
    <>
      <Newsletter />
      <div className="footer-container ">
        <div className="container-fluid ">
          <div className="footer-content ">
            <div className="footer-card my-12">
              <h3>contact us</h3>
              <ul className="mt-4">
                <li>
                  <FaMapMarkerAlt />
                  100 Rt 59, Unit 120, Suffern, NY, US, 10901
                </li>
                <li>
                  <FaPhoneVolume />
                  855-688-1388 / 845-388-1300
                </li>
                <li>
                  <FaEnvelopeOpenText />
                  customerservice@tmhardware.com
                </li>
              </ul>
            </div>
            <div className="footer-card my-12">
              <h3>INFO LINKS</h3>
              <ul className="mt-4">
                <li>FAQ</li>
                <li>Shop By Brand</li>
                <li>Information Center</li>
                <li>Site Map</li>
                <li>Trademark Hardware Blog</li>
                <li>How to Determine Door Swing</li>
              </ul>
            </div>
            <div className="footer-card my-12">
              <h3>SERVICES</h3>
              <ul className="mt-4">
                <li>Contact Us</li>
                <li>Shipping Info</li>
                <li>Return Policy</li>
                <li>Bulk Discounts</li>
                <li>Contractor Corner</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="footer-card my-12">
              <h3>CUSTOMER ACCOUNT</h3>
              <ul className="mt-4">
                <li>Shopping Cart</li>
                <li>Favorites / Wish List</li>
              </ul>
            </div>
            <div className="footer-card my-12">
              <div className="img flex flex-col items-center gap-4">
                <img src={secure} alt="" />

                <img src={seal} alt="" />
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </>
  );
}

export default Footer;

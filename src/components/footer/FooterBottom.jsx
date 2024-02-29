import React from "react";
import paymentImg from "../../assets/payments-icons.png";
function FooterBottom() {
  return (
    <>
      <div className="footer-bottom-container border-t-2">
        <div className="container-fluid">
          <div className="data flex items-center py-2">
            <p> © 2011 - 2024 Trademark Hardware Inc. All rights reserved.</p>

            <div className="img ml-auto ">
              <img src={paymentImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;

"use client";
import React from "react";
import Anchor from "../anchor";

const Footer = () => {
  return (
    <>
      <footer className="si-footer__wrap si-section__wrap">
        <div className="si-main__container">
          <div className="si-footer__grid">
            <div className="si-footer__copyright">
              <i className="ri-copyright-line"></i> Copyright <b>Akeshya</b>.
              All Rights Reserved
            </div>
            <div className="si-footer__sitemap">
              <Anchor
                hyperLink={"https://akeshya.com/Terms%20and%20conditions.pdf"}
                linkText={"Terms and conditions"}
              />
              <Anchor
                hyperLink={"https://akeshya.com/Refund%20policy.pdf"}
                linkText={"Refund policy"}
              />
              <Anchor
                hyperLink={"https://akeshya.com/Privacy%20policy.pdf"}
                linkText={"Privacy policy"}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

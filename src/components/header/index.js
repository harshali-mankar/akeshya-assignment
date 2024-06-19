"use client";
import Image from "next/image";
import React from "react";
import logo from "@/images/logo.png";
import Anchor from "../anchor";

const Header = () => {
  return (
    <>
      <div className="si-header">
        <div className="si-main__container">
          <div className="si-header__grid">
            <Anchor
              hyperLink={"/"}
              linkCls={"si-header__brandLogo"}
              component={
                <>
                  <Image src={logo} alt="akeshya-logo" />
                  <span>AKESHYA</span>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

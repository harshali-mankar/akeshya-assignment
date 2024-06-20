"use client";
import Image from "next/image";
import React from "react";
import CtaButton from "@/components/ctaButton";
import heroBannerThumb from "@/images/hero-img.png";
const HeroBanner = () => {
  return (
    <>
      <section className="heroBanner__wrap">
        <div className="main__container">
          <div className="heroBanner__grid">
            <div className="heroBanner__grid-lhs">
              <h1 className="heroBanner__title">
                Grow your business with Akeshya
              </h1>
              <h2 className="heroBanner__caption">
                We are team of talented website designers, developers & digital
                marketeers
              </h2>
              <div className="heroBanner__cta">
                <CtaButton
                  btnCls="btn btn__primary btn__primary--outline"
                  btnText={"Get Started"}
                  onClickProp={() => {}}
                />
              </div>
            </div>
            <div className="heroBanner__grid-rhs">
              <div className="heroBanner__thumb">
                <Image src={heroBannerThumb} alt="akeshya-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;

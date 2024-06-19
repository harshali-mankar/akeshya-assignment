"use client";
import Image from "next/image";
import React from "react";
import CtaButton from "@/components/ctaButton";
import heroBannerThumb from "@/images/hero-img.png";
const HeroBanner = () => {
  return (
    <>
      <section className="si-heroBanner__wrap">
        <div className="si-main__container">
          <div className="si-heroBanner__grid">
            <div className="si-heroBanner__grid-lhs">
              <h1 className="si-heroBanner__title">
                Grow your business with Akeshya
              </h1>
              <h2 className="si-heroBanner__caption">
                We are team of talented website designers, developers & digital
                marketeers
              </h2>
              <div className="si-heroBanner__cta">
                <CtaButton
                  btnCls="si-btn si-btn__primary si-btn__primary--outline"
                  btnText={"Get Started"}
                  onClickProp={() => {}}
                />
              </div>
            </div>
            <div className="si-heroBanner__grid-rhs">
              <div className="si-heroBanner__thumb">
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

"use client";
import Image from "next/image";
import React from "react";
import CtaButton from "@/components/ctaButton";
import heroBannerThumb from "@/images/hero-img.png";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <>
      <section className="heroBanner__wrap">
        <div className="main__container">
          <div className="heroBanner__grid">
            <div className="heroBanner__grid-lhs">
              <motion.h1
                className="heroBanner__title"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Grow your business with Akeshya
              </motion.h1>
              <motion.h2
                className="heroBanner__caption"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                We are team of talented website designers, developers & digital
                marketeers
              </motion.h2>
              <motion.div
                className="heroBanner__cta"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <CtaButton
                  btnCls="btn btn__primary btn__primary--outline"
                  btnText={"Get Started"}
                  onClickProp={() => {}}
                />
              </motion.div>
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

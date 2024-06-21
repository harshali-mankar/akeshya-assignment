"use client";
import React from "react";
import SectionHeading from "../sectionHeading";
import CtaButton from "@/components/ctaButton";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <>
      <section className="aboutUs__wrap section__wrap">
        <div className="main__container">
          <SectionHeading heading="ABOUT US" />
          <motion.div
            className="aboutUs__content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>
              We are Akeshya, a firm that specializes in web design and
              marketing. We help transform ideas into reality with a team of
              passionate graphic designers, web developers, and seasoned
              marketing advisors.
            </p>
            <ul>
              <li>
                We started with a simple idea: do what is best for the client.
              </li>
              <li>
                Our methodical and individual approach to each project delivers
                the finest possible results for your media.
              </li>
              <li>
                Our day-to-day work is to solve your problems utilising the most
                up-to-date, practical adaptive technology, and we have a lot of
                fun doing it.{" "}
              </li>
            </ul>
            <p>
              We&apos;re professional, but we&apos;re also friendly, and
              we&apos;ll always pay attention to your concerns. We expect to
              work with innovative people that have an open mind and are
              dedicated to making every idea a reality. We want to hear from you
              if you&apos;re interested in SEO, have Web Development ideas, or
              require a graphic designer who can match your goals.
            </p>
            <CtaButton
              btnCls={"btn btn__primary btn__primary--outline"}
              btnText={"Learn More"}
              onClickProp={() => {}}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

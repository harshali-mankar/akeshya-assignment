"use client";
import React from "react";
import SectionHeading from "../sectionHeading";
import SectionCaption from "../sectionCaption";
import { motion } from "framer-motion";
const servicesArr = [
  {
    title: "Design",
    content:
      "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
  },
  {
    title: "Development",
    content:
      "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
  },
  {
    title: "Marketing",
    content:
      "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
  },
  {
    title: "Support",
    content:
      "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
  },
];
const OurProcess = () => {
  return (
    <>
      <section className="ourProcess__wrap section__wrap">
        <div className="main__container">
          <SectionHeading heading="OUR PROCESS" />
          <SectionCaption content="Over the years we’ve evolved a tested method for attaining achievement for each one of our clients." />
          <motion.div
            className="services__list"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {servicesArr.map((item, index) => (
              <div className="services__box" key={index}>
                <h3 className="services__box-title">
                  {index + 1}
                  {". "}
                  {item.title}
                </h3>
                <p className="services__box-content">{item.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;

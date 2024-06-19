"use client";
import React from "react";
import SectionHeading from "../sectionHeading";
import SectionCaption from "../sectionCaption";

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
      <section className="si-ourProcess__wrap si-section__wrap">
        <div className="si-main__container">
          <SectionHeading heading="OUR PROCESS" />
          <SectionCaption content="Over the years we’ve evolved a tested method for attaining achievement for each one of our clients." />
          <div className="si-services__list">
            {servicesArr.map((item, index) => (
              <div className="si-services__box" key={index}>
                <h3 className="si-services__box-title">
                  {index + 1}
                  {". "}
                  {item.title}
                </h3>
                <p className="si-services__box-content">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;

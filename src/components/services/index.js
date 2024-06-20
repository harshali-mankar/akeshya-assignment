"use client";
import React from "react";
import SectionHeading from "../sectionHeading";
import SectionCaption from "../sectionCaption";
import Anchor from "../anchor";

const servicesArr = [
  {
    icon: "ri-dribbble-line",
    title: "Design",
    content:
      "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
  },
  {
    icon: "ri-file-text-line",
    title: "Development",
    content:
      "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
  },
  {
    icon: "ri-earth-line",
    title: "Marketing",
    content:
      "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
  },
  {
    icon: "ri-speed-up-line",
    title: "Support",
    content:
      "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
  },
];

const Services = () => {
  return (
    <>
      <section id="services" className="services__wrap section__wrap">
        <div className="main__container">
          <SectionHeading heading="SERVICES" />
          <SectionCaption content="Akeshya will serve as your consultant and development partner to help you turn your idea into a reality." />
          <div className="services__list">
            {servicesArr.map((item, index) => (
              <Anchor
                key={index}
                linkCls={"services__box"}
                hyperLink={""}
                component={
                  <>
                    <div className="services__box-icon">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="services__box-title">{item.title}</h3>
                    <p className="services__box-content">{item.content}</p>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

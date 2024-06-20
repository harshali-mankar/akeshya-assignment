"use client";
import React from "react";
import SectionHeading from "../sectionHeading";
import SectionCaption from "../sectionCaption";

const ourCoreFeaturesArr = [
  {
    icon: "ri-window-line",
    iconColor: "#ffbb2c",
    title: "Web design",
  },
  {
    icon: "ri-code-box-line",
    iconColor: "#5578ff",
    title: "Development",
  },
  {
    icon: "ri-play-circle-line",
    iconColor: "#e361ff",
    title: "Media buying",
  },
  {
    icon: "ri-creative-commons-by-line",
    iconColor: "#e80368",
    title: "Branding",
  },
  {
    icon: "ri-search-eye-line",
    iconColor: "#47aeff",
    title: "Search engine",
  },
  {
    icon: "ri-todo-line",
    iconColor: "#ffa76e",
    title: "Brand strategy",
  },
  {
    icon: "ri-map-pin-line",
    iconColor: "#dbce11",
    title: "Local search marketing",
  },
  {
    icon: "ri-bar-chart-grouped-line",
    iconColor: "#4233ff",
    title: "Lead Tracking & Management ",
  },
  {
    icon: "ri-contacts-book-line",
    iconColor: "#b2904f",
    title: "Contact management",
  },
  {
    icon: "ri-disc-line",
    iconColor: "#b20969",
    title: "Media management",
  },
  {
    icon: "ri-calendar-event-line",
    iconColor: "#ff5828",
    title: "Social scheduling",
  },
  {
    icon: "ri-advertisement-fill",
    iconColor: "#29cc61",
    title: "Ad retargeting",
  },
];

const OurCoreFeatures = () => {
  return (
    <>
      <section className="ourCoreFeatures__wrap section__wrap">
        <div className="main__container">
          <SectionHeading heading="OUR CORE FEATURES" />
          <SectionCaption content="Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money." />
          <div className="ourCoreFeatures__list">
            {ourCoreFeaturesArr.map((item, index) => (
              <div className="ourCoreFeatures__box" key={index}>
                <div
                  className="ourCoreFeatures__box-icon"
                  style={{ color: item.iconColor }}
                >
                  <i className={item.icon}></i>
                </div>
                <h3 className="ourCoreFeatures__box-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCoreFeatures;

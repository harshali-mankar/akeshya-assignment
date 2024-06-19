"use client";
import Image from "next/image";
import React from "react";
import statsThumb from "@/images/counts-img.svg";

const statsArr = [
  {
    icon: "ri-user-smile-line",
    title: "Organic Reach",
    slug: "(Global)",
    count: "3835039",
  },
  {
    icon: "ri-megaphone-fill",
    title: "Campaigns",
    count: "85",
  },
  {
    icon: "ri-time-line",
    title: "Watch Hours",
    slug: "(Asia)",
    count: "14081",
  },
  {
    icon: "ri-global-line",
    title: "Excellent CTR %",
    slug: "(Asia)",
    count: "17",
  },
];

const Stats = () => {
  return (
    <>
      <section className="si-stats__wrap">
        <div className="si-main__container">
          <div className="si-stats__grid">
            <div className="si-stats__grid-lhs">
              <div className="si-stats__thumb">
                <Image src={statsThumb} alt={statsThumb} />
              </div>
            </div>
            <div className="si-stats__grid-rhs">
              <div className="si-stats__list">
                {statsArr.map((item, index) => (
                  <div className="si-stats__box" key={index}>
                    <div className="si-stats__box-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="si-stats__box-count">{item.count}</div>
                    <div className="si-stats__box-lbl">
                      {item.title} {item.slug && <em>{item.slug}</em>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

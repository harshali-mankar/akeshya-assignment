"use client";
import Image from "next/image";
import React from "react";
import statsThumb from "@/images/counts-img.svg";
import TextTicker from "../textTicker";
import { motion } from "framer-motion";

const statsArr = [
  {
    icon: "ri-user-smile-line",
    title: "Organic Reach",
    slug: "(Global)",
    count: "3835039",
    tickerEffect: true,
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
    tickerEffect: true,
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
      <section className="stats__wrap">
        <div className="main__container">
          <div className="stats__grid">
            <div className="stats__grid-lhs">
              <div className="stats__thumb">
                <Image src={statsThumb} alt={statsThumb} />
              </div>
            </div>
            <motion.div
              className="stats__grid-rhs"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="stats__list">
                {statsArr.map((item, index) => (
                  <div className="stats__box" key={index}>
                    <div className="stats__box-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="stats__box-count">
                      {item?.tickerEffect ? (
                        <TextTicker value={Number(item.count)} />
                      ) : (
                        item.count
                      )}
                    </div>
                    <div className="stats__box-lbl">
                      {item.title} {item.slug && <em>{item.slug}</em>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

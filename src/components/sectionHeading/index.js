"use client";
import React from "react";
import { motion } from "framer-motion";
const SectionHeading = ({ heading }) => {
  return (
    <>
      <motion.h2
        className="section__heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>
    </>
  );
};

export default SectionHeading;

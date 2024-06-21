import React from "react";
import { motion } from "framer-motion";
const SectionCaption = ({ content }) => {
  return (
    <>
      <motion.p
        className="section__caption"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {content}
      </motion.p>
    </>
  );
};

export default SectionCaption;

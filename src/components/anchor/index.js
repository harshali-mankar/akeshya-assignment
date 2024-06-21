"use client";
import React from "react";
import { motion } from "framer-motion";
function Anchor({
  forMobileNoSpan,
  linkCls,
  iconCls,
  linkText,
  hyperLink,
  linkTarget = "_blank",
  btnState = false,
  extraAttri = {},
  component,
  bannerUrl,
  motionDuration = 0.5,
}) {
  const iconTag = iconCls ? <i className={iconCls}></i> : "";
  const spanTag = linkText ? <span>{linkText}</span> : "";
  const componentMarkup = component ? component : "";
  return (
    <>
      <motion.a
        onClick={() => bannerUrl}
        href={hyperLink}
        target={linkTarget}
        rel="noopener noreferrer"
        className={linkCls}
        disabled={btnState}
        {...extraAttri}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: motionDuration + 0.5 }}
        // transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {!forMobileNoSpan && spanTag}
        {iconTag}
        {componentMarkup}
      </motion.a>
    </>
  );
}

export default Anchor;

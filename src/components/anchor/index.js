"use client";
import React from "react";

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
}) {
  const iconTag = iconCls ? <i className={iconCls}></i> : "";
  const spanTag = linkText ? <span>{linkText}</span> : "";
  const componentMarkup = component ? component : "";
  return (
    <>
      <a
        onClick={() => bannerUrl}
        href={hyperLink}
        target={linkTarget}
        rel="noopener noreferrer"
        className={linkCls}
        disabled={btnState}
        {...extraAttri}
      >
        {!forMobileNoSpan && spanTag}
        {iconTag}
        {componentMarkup}
      </a>
    </>
  );
}

export default Anchor;

"use client";
import React from "react";

function CtaButton({
  forMobileNoSpan,
  btnCls,
  iconCls,
  btnText,
  ariaLabel,
  btnState = false,
  btnType = "button",
  extraAttri = {},
  onClickProp = () => {},
  code,
  clickRef,
}) {
  const iconTag = iconCls ? <i className={iconCls}></i> : "";
  const spanTag = btnText ? <span>{btnText}</span> : "";

  const refProp = clickRef ? { ref: clickRef } : {};

  return (
    <>
      <button
        {...refProp}
        className={btnCls}
        type={btnType}
        aria-label={ariaLabel ? ariaLabel : btnText}
        disabled={btnState}
        onClick={(e) => onClickProp(e)}
        data-clipboard-text={code}
        {...extraAttri}
      >
        {!forMobileNoSpan && spanTag}
        {iconTag}
      </button>
    </>
  );
}

export default CtaButton;

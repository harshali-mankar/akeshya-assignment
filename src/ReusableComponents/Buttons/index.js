import React from "react";

function CtaButton({ btnClass, btnIconName, btnText, btnConfig }) {
  const {BtnIcon} = btnConfig;
  return (
    <>
      <div className={btnClass} > 
          <span>{btnText}</span>  {BtnIcon?<i className={btnIconName}></i>:''}
      </div>
    </>
  );
}

export default CtaButton;

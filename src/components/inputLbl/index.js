"use client";
import React from "react";

const InputLabel = ({ inputID, hideInputLbl, inputLbl }) => {
  return (
    <>
      <label className="lbl" htmlFor={inputID}>
        {!hideInputLbl ? inputLbl : null}
      </label>
    </>
  );
};

export default InputLabel;

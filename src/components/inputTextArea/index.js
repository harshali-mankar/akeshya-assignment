"use client";
import React, { useRef } from "react";
import InputLabel from "@/components/inputLbl";

const InputTextArea = ({
  inputId,
  inputLbl,
  rowCount,
  colCount,
  placeholder,
  parentExtraCls,
  isDisabled = false,
  inputText,
  handleInput,
  components,
  inputValidate,
  registerFunction,
  onBlur = () => {},
  inputLen,
}) => {
  const parentDiv = useRef(null);

  function handleBlur(e) {
    onBlur(e);
  }

  const { ref = null, ...rest } = registerFunction
    ? registerFunction(inputId)
    : {};

  return (
    <>
      <div
        ref={parentDiv}
        className={`input ${parentExtraCls ? parentExtraCls : ""} ${
          inputValidate ? "invalid" : ""
        }`}
      >
        {inputLbl ? (
          <InputLabel
            inputLbl={inputLbl}
            inputID={inputId}
            inputLen={inputLen}
          />
        ) : (
          ""
        )}

        <div className="input__field">
          <textarea
            id={inputId}
            name={inputId}
            rows={rowCount}
            cols={colCount}
            disabled={isDisabled}
            value={inputText}
            onChange={handleInput}
            placeholder={placeholder}
            onBlur={handleBlur}
            {...rest}
            ref={ref}
          />
          {components ? components : null}
        </div>
      </div>
    </>
  );
};

export default InputTextArea;

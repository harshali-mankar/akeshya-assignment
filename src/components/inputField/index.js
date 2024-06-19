"use client";
import React, { useRef } from "react";
import InputLabel from "@/components/inputLbl";
import CtaButton from "@/components/ctaButton";

const InputField = ({
  parentExtraCls,
  isIcon,
  inputLbl,
  hideInputLbl,
  inputID,
  inputType = "text",
  placeholderIcon,
  inputTooltipText,
  placeholderLabel = false,
  isDisabled = false,
  inputText,
  handleInput,
  extraAttri = {},
  components,
  inputValidate,

  inputLen,
  onBlur = () => {},
  iconClickHandler,
}) => {
  const parentDiv = useRef(null);

  function handleBlur(e) {
    onBlur(e);
  }
  return (
    <>
      <div
        ref={parentDiv}
        className={`si-input ${parentExtraCls ? parentExtraCls : ""} ${
          inputValidate ? "si-invalid" : ""
        }`}
      >
        {inputLbl ? (
          <InputLabel
            inputLbl={inputLbl}
            hideInputLbl={hideInputLbl}
            inputID={inputID}
            inputTooltipText={inputTooltipText}
            inputLen={inputLen}
          />
        ) : (
          ""
        )}

        <div className="si-input__field">
          {placeholderIcon ? <i className={placeholderIcon} /> : null}
          <input
            autoComplete="off"
            name={inputID}
            type={inputType}
            id={inputID}
            placeholder={placeholderLabel}
            disabled={isDisabled}
            value={inputText}
            onChange={handleInput}
            onFocus={() => {}}
            onBlur={handleBlur}
            maxLength={200}
            {...extraAttri}
          />
          {components ? components : null}

          {isIcon ? (
            <div className="si-input__icon">
              <CtaButton
                btnCls={"si-btn si-btn__icon"}
                iconCls={isIcon}
                onClickProp={() => iconClickHandler && iconClickHandler()}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export { InputField };

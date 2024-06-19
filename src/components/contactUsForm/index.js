"use client";
import React from "react";
import { InputField } from "@/components/inputField";
import InputTextArea from "../inputTextArea";
import CtaButton from "../ctaButton";

const ContactUsForm = () => {
  return (
    <>
      <form className="si-contactUs__form">
        <InputField
          placeholderLabel={"Your Name"}
          inputID={"yourName"}
          handleInput={() => {}}
        />
        <InputField
          inputType={"mail"}
          placeholderLabel={"Your Email"}
          inputID={"yourEmail"}
          extraAttri={{ inputmode: "email" }}
          handleInput={() => {}}
        />
        <InputField
          inputType={"text"}
          placeholderLabel={"Subject"}
          inputID={"subject"}
          handleInput={() => {}}
        />
        <InputTextArea
          placeholder={"Message"}
          inputId={"yourMsg"}
          handleInput={() => {}}
        />
        <CtaButton
          btnCls={"si-btn si-btn__primary"}
          btnText={"Send Message"}
          onClickProp={() => {}}
        />
      </form>
    </>
  );
};

export default ContactUsForm;

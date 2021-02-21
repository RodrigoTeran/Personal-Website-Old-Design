// React
import React, { useState, useRef } from "react";

// Components
import FormInpuText from "./FormInputText";

// To send emails
import emailjs from "emailjs-com";

// Hooks
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

// Config
import {
  BACKGROUND_COLOR_lAYOUT_MSG_ERROR,
  BACKGROUND_COLOR_lAYOUT_MSG_SUCCESS,
  TEXT_COLOR_lAYOUT_MSG_ERROR,
  TEXT_COLOR_lAYOUT_MSG_SUCCESS,
} from "../../../config";

const Contact = ({
  // Layout MSG
  setIsInLayout,
  setBackgroundColor,
  setTitle,
  setText,
  setTextColor,
  setIsInLayoutLoader,

  // Ref
  contactRef,
}) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMsg, setInputMsg] = useState("");

  // Refs for animations
  const h2 = useRef(null);
  const i1 = useRef(null);
  const i2 = useRef(null);
  const i3 = useRef(null);
  const b1 = useRef(null);

  // Hook for animation scroll
  useAnimationsScroll([h2, i1, i2, i3], 0.5, "notAppear");
  useAnimationsScroll([b1], 0.1, "notAppear");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsInLayoutLoader(true);
    if (inputName === "" || inputEmail === "" || inputMsg === "") {
      setIsInLayoutLoader(false);
      setIsInLayout(true);
      setBackgroundColor(BACKGROUND_COLOR_lAYOUT_MSG_ERROR);
      setTitle("Error");
      setText("Faltan datos por llenar");
      setTextColor(TEXT_COLOR_lAYOUT_MSG_ERROR);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            setIsInLayoutLoader(false);
            setIsInLayout(true);
            setBackgroundColor(BACKGROUND_COLOR_lAYOUT_MSG_SUCCESS);
            setTitle("Todo bien");
            setText("Se mandó el correo con éxito");
            setTextColor(TEXT_COLOR_lAYOUT_MSG_SUCCESS);
          },
          (error) => {
            setIsInLayoutLoader(false);
            setIsInLayout(true);
            setBackgroundColor(BACKGROUND_COLOR_lAYOUT_MSG_ERROR);
            setTitle("Error");
            setText("Ocurrió un error al mandar el correo");
            setTextColor(TEXT_COLOR_lAYOUT_MSG_ERROR);
          }
        );
    }
  };
  return (
    <div className="portfolioContact" ref={contactRef}>
      <div className="portfolioContact__h2">
        <h2 className={`notAppear`} ref={h2}>
          Contáctame
        </h2>
      </div>
      <form className="portfolioContact__me" onSubmit={onSubmit}>
        <FormInpuText
          _ref={i1}
          id="#portfolioContact__input__1"
          text="Nombre"
          name="name"
          inputValue={inputName}
          setInputValue={setInputName}
          isTextArea={false}
        ></FormInpuText>
        <FormInpuText
          _ref={i2}
          id="#portfolioContact__input__2"
          text="Correo electrónico"
          name="email"
          inputValue={inputEmail}
          setInputValue={setInputEmail}
          isTextArea={false}
        ></FormInpuText>
        <FormInpuText
          _ref={i3}
          id="#portfolioContact__input__3"
          text="Mensaje"
          name="msg"
          inputValue={inputMsg}
          setInputValue={setInputMsg}
          isTextArea={true}
        ></FormInpuText>
        <button type="submit" className={`notAppear`} ref={b1}>
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Contact;

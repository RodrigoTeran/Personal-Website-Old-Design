import React, { useState } from "react";
import FormInpuText from "./FormInputText";
import emailjs from "emailjs-com";

const Contact = ({
  setIsInLayout,
  setBackgroundColor,
  setTitle,
  setText,
  setTextColor,
  setIsInLayoutLoader,
}) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMsg, setInputMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsInLayoutLoader(true);
    if (inputName === "" || inputEmail === "" || inputMsg === "") {
      setIsInLayoutLoader(false);
      setIsInLayout(true);
      setBackgroundColor("rgb(189, 71, 71)");
      setTitle("Error");
      setText("Falta llenar datos");
      setTextColor("rgb(99,9,27)");
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
            setBackgroundColor("rgb(100, 199, 130)");
            setTitle("Todo bien");
            setText("Se mandó el correo con éxito");
            setTextColor("rgb(31, 85, 47)");
          },
          (error) => {
            setIsInLayoutLoader(false);
            setIsInLayout(true);
            setBackgroundColor("rgb(189, 71, 71)");
            setTitle("Error");
            setText("Ocurrió un error al mandar el correo");
            setTextColor("rgb(99,9,27)");
          }
        );
    }
  };
  return (
    <div className="contact">
      <div className="contact-h2">
        <h2>Contáctame</h2>
      </div>
      <form className="contact-me" onSubmit={onSubmit}>
        <FormInpuText
          id="row-message-form-input-author"
          text="Nombre"
          name="name"
          inputValue={inputName}
          setInputValue={setInputName}
          isTextArea={false}
        ></FormInpuText>
        <FormInpuText
          id="row-message-form-input-email"
          text="Correo electrónico"
          name="email"
          inputValue={inputEmail}
          setInputValue={setInputEmail}
          isTextArea={false}
        ></FormInpuText>
        <FormInpuText
          id="row-message-form-input-msg"
          text="Mensaje"
          name="msg"
          inputValue={inputMsg}
          setInputValue={setInputMsg}
          isTextArea={true}
        ></FormInpuText>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Contact;

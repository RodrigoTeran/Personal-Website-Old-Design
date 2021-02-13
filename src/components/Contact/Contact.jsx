import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = () => {
    var listaComponentes = [
      "#row-message-form-input-author",
      "#row-message-form-input-email",
      "#row-message-form-input-msg",
      "#h2-contact",
    ];
    for (var i = 0; i < listaComponentes.length; i++) {
      const top = getTop(listaComponentes[i]);
      if (
        document.scrollingElement.scrollTop >=
        top - window.innerHeight / 1.2
      ) {
        if (i === 0) {
          setIsI1(true);
        } else if (i === 1) {
          setIsI2(true);
        } else if (i === 2) {
          setIsI3(true);
        } else {
          setIsH2(true);
        }
      }
    }
  };
  const getTop = (component) => {
    // Función que calcula la distancia que existe de un componente y hasta arriba de la página
    return parseInt(
      document.querySelector(component).getBoundingClientRect().top +
        document.scrollingElement.scrollTop
    );
  };
  const [isH2, setIsH2] = useState(false);
  const [isI1, setIsI1] = useState(false);
  const [isI2, setIsI2] = useState(false);
  const [isI3, setIsI3] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsInLayoutLoader(true);
    if (inputName === "" || inputEmail === "" || inputMsg === "") {
      setIsInLayoutLoader(false);
      setIsInLayout(true);
      setBackgroundColor("rgb(219, 111, 111)");
      setTitle("Error");
      setText("Faltan datos por llenar");
      setTextColor("rgb(69,9,7)");
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
            setTextColor("rgb(11, 65, 27)");
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
        <h2 id="h2-contact" className={`${isH2 ? "" : "not-appear-about"}`}>
          Contáctame
        </h2>
      </div>
      <form className="contact-me" onSubmit={onSubmit}>
        <FormInpuText
          id="row-message-form-input-author"
          text="Nombre"
          name="name"
          appearVar={isI1}
          inputValue={inputName}
          setInputValue={setInputName}
          isTextArea={false}
        ></FormInpuText>
        <FormInpuText
          id="row-message-form-input-email"
          text="Correo electrónico"
          name="email"
          appearVar={isI2}
          inputValue={inputEmail}
          setInputValue={setInputEmail}
          isTextArea={false}
        ></FormInpuText>
        <FormInpuText
          id="row-message-form-input-msg"
          text="Mensaje"
          name="msg"
          appearVar={isI3}
          inputValue={inputMsg}
          setInputValue={setInputMsg}
          isTextArea={true}
        ></FormInpuText>
        <button type="submit" className={`${isI3 ? "" : "not-appear-about"}`}>
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Contact;

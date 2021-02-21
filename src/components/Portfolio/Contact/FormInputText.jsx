// React
import React, { useState } from "react";

const FormInputText = ({
  text,
  inputValue,
  setInputValue,
  _ref,
  isTextArea,
  name,
  id
}) => {
  const [isLabelOpened, setIsLabelOpened] = useState(false);
  const [isInputCompleted, setIsInputCompleted] = useState(false);
  return (
    <div className={`portfolioContact__input notAppear`} ref={_ref}>
      <label className={`${isLabelOpened ? "open" : ""}`} htmlFor={id}>
        {text}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          value={inputValue}
          className={`${isInputCompleted ? "completed" : ""}`}
          onFocus={() => {
            setIsLabelOpened(true);
          }}
          maxLength={10000}
          onBlur={() => {
            if (inputValue === "") {
              setIsLabelOpened(false);
              setIsInputCompleted(false);
            } else {
              setIsInputCompleted(true);
            }
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (e.target.value !== "") {
              setIsLabelOpened(true);
            }
          }}
          id={id}
        ></textarea>
      ) : (
        <input
          name={name}
          value={inputValue}
          className={`${isInputCompleted ? "completed" : ""}`}
          onFocus={() => {
            setIsLabelOpened(true);
          }}
          onBlur={() => {
            if (inputValue === "") {
              setIsLabelOpened(false);
              setIsInputCompleted(false);
            } else {
              setIsInputCompleted(true);
            }
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (e.target.value !== "") {
              setIsLabelOpened(true);
            }
          }}
          id={id}
          type="text"
        />
      )}
    </div>
  );
};
export default FormInputText;

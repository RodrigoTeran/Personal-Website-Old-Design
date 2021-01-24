import React from "react";

const IndexPageButton = ({ onClickFunction, text, type }) => {
  return (
    <button
      className={`index-page-button ${type === "gradient" ? "gradient" : "blank"}`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
};
export default IndexPageButton;

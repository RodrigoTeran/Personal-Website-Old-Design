import React from "react";

const SocialMediaButton = ({ onClickFunction, children }) => {
  return (
    <button className="social-media-button" onClick={onClickFunction}>
      {children}
    </button>
  );
};
export default SocialMediaButton;

import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";

const RightSide = () => {
  return (
    <div className="index-page-right-side">
      <div className="index-page-right-side-container">
        <div className="index-page-right-side-independent-1">
          <img
            src={`${
              isWebpSupported
                ? "/images/contact-page-me.webp"
                : "/images/contact-page-me.jpg"
            }`}
            alt="Rodrigo Terán"
          />
        </div>
        <div className="index-page-right-side-independent-2">Estudios</div>
        <div className="index-page-right-side-independent-3">Trabajo</div>
        <div className="index-page-right-side-independent-4">Acerca de</div>
        <div className="index-page-right-side-independent-5">Habilidades</div>
      </div>
    </div>
  );
};
export default RightSide;

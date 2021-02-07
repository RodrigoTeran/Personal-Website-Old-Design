import React from "react";

const WebApp = ({ title, text, imageSrc, href }) => {
  return (
    <a href={href} target="blank" className="work-page-web-app">
      <div className="work-page-web-app-image">
        <img src={imageSrc} alt="Aplicación Web" />
      </div>
      <div className="work-page-web-app-info">
        <div className="work-page-web-app-title">{title}</div>
        <div className="work-page-web-app-text">{text}</div>
      </div>
    </a>
  );
};

const WebApps = () => {
  return (
    <div className="work-page-web-apps">
      <div className="work-page-web-apps-title">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
          </svg>
        </div>
        <div>Aplicaciones Web:</div>
      </div>
      <div className="work-page-web-apps-grid">
        <WebApp
          title="Dog Finder"
          text="Dog Finder es una plataforma web que ayuda a encontrar mascotas perdidas con Inteligencia Artificial"
          imageSrc="/images/dogFinder.JPG"
          href="https://dogfinder.com.mx/"
        ></WebApp>
        <WebApp
          title="BIMAS SC"
          text="BIMAS SC es una Empresa con la finalidad de ofrecer servicios integrales en temas Ambientales, de Seguridad y Salud."
          imageSrc="/images/bimas-sc.JPG"
          href="https://bimas.com.mx/"
        ></WebApp>
      </div>
    </div>
  );
};
export default WebApps;

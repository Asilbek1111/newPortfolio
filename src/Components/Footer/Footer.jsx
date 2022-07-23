import React from "react";
import "./Footer.scss";
import wave from "../../img/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Telegram from "@iconscout/react-unicons/icons/uil-telegram";
import Github from "@iconscout/react-unicons/icons/uil-github";


const Footer = () => {
  return (
    <div className="footer">
      <img
        src={wave}
        alt=""
        style={{
          width: "100%",
        }}
      />

      <div className="f-content">
        <span className="emailmy">Aslbekh222@gmail.com</span>
        <div className="f-icons">
          <Telegram color="white" size="3rem" />
          <Insta color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Services.scss";
import HeartImoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import resume from '../../img/resume.png'


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="services" id="Services">
      {/*Left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Take a joy seeing my work. Speed, Quality, and high performance
          <br /> are in the first place
        </span>
        <a href={resume} download>
          <button className="s-button button">Download CV</button>
        </a>
        <div
          className="blur blur1"
          style={{
            background: "#abf1ff94",
            width: "22rem",
            height: "14rem",
            filter: "blur(90px)",
          }}
        ></div>
      </div>
      {/*Right side*/}
      <div className="cards">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
          style={{ left: "20rem" }}
        >
          <Card
            emoji={HeartImoji}
            heading="Design"
            detail="Figma, Adobe Photoshop and more to create designs"
          />
        </motion.div>

        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading="Developer"
            detail="Html, Css, Sass, Bootstrap, Javascript, React and more"
          />
        </motion.div>

        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
          style={{ top: "19rem", left: "14rem" }}
        >
          <Card
            emoji={Humble}
            heading="UI/UX"
            detail="Additionally I can create beautiful UIs and easy-to-use UXs"
          />
        </motion.div>

        <div
          className="blur blur2"
          style={{
            background: "pink",
            width: "22rem",
            height: "14rem",
            filter: "blur(90px)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

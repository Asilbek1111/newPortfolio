import React from "react";
import "./Works.scss";
import { motion } from "framer-motion";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/*Left side*/}
      <div className="awesome">
        <span className="new" style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span className="new">Brand & Clients</span>
        <span>
          Take a joy seeing my work. Speed, Quality, and high performance
          <br /> are in the first place and high performance <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          incidunt.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="s-button button">Hire Me</button>
        </Link>
        <div
          className="blur blur1"
          style={{
            background: "#abf1ff94",
            left: "26%",
            top: "48%",
            width: "22rem",
            height: "14rem",
            filter: "blur(90px)",
          }}
        ></div>
      </div>

      {/*right side*/}

      <div className="w-right">
        <motion.div
          initial={{ rotate: 70 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

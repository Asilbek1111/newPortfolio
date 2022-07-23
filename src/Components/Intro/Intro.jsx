import "./Intro.scss";
import React from "react";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassImoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Telegram from "@iconscout/react-unicons/icons/uil-telegram";
import {Link} from 'react-scroll'

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I am</span>
          <span>Asilbek Khaydarov</span>
          <span>
            Frontend Developer with middle level of experience in web designing
            and development, producing the Quality work!
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="i-button button">Hire me</button>
        </Link>

        <div className="i-icons">
          <a href="https://github.com/asilbek1111/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/asilbek666999/">
            <img src={Instagram} alt="" />
          </a>
          <a href="#">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassImoji}
          alt=""
        />

        <motion.div
          initial={{ left: "74%", top: "-4%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
          style={{ top: "18rem", left: "1rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/*Blurs*/}
        <div
          className="blur"
          style={{
            background: "pink",
            top: "-18%",
            width: "22rem",
            height: "14rem",
            left: "56%",
            filter: "blur(90px)",
          }}
        ></div>

        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

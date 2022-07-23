import React from "react";
import "./Portfolio.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/youtube.png";
import Ecommerce from "../../img/movies.webp";
import Hoc from "../../img/bootstrap.png";
import MusicApp from "../../img/dog.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/*Heading*/}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/*Slider*/}
      <Swiper
        spaceBetween={-200}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://utubedownload.netlify.app/" target="_blank">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://moviee-search-js.netlify.app/" target="_blank">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="http://aslbekblog.epizy.com/">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

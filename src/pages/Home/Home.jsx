import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../app/Styles/Home.css";
import slide1 from "../../assets/Image/slide1.jpg";
import slide2 from "../../assets/Image/slide2.jpg";
import slide3 from "../../assets/Image/slide3.jpg";
import slide4 from "../../assets/Image/slide4.jpg";
import slide5 from "../../assets/Image/slide5.jpg";
import slide6 from "../../assets/Image/slide6.jpg";
import slide7 from "../../assets/Image/slide7.jpg";

export const Home = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const navSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...mainSettings} ref={slider1} className="slider-for">
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className="slide-img" />
          </div>
        ))}
      </Slider>

      <Slider {...navSettings} ref={slider2} className="slider-nav">
        {slides.map((slide, index) => (
          <div key={index} className="nav-slide">
            <img src={slide} alt={`Thumbnail ${index + 1}`} className="thumb-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

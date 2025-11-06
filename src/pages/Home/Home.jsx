import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "..//..//app/Styles/Home.css"
import slide1 from "..//../assets/Image/slide1.jpg";
import slide2 from "..//../assets/Image/slide2.jpg";
import slide3 from "..//../assets/Image/slide3.jpg";
import slide4 from "..//../assets/Image/slide4.jpg";
import slide5 from "..//../assets/Image/slide5.jpg";
import slide6 from "..//../assets/Image/slide6.jpg";
import slide7 from "..//../assets/Image/slide7.jpg";
export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="slider-container">
<Slider {...settings}>
  <div>
    <img src={slide1} alt="Slide 1" />
  </div>
  <div>
    <img src={slide2} alt="Slide 2" />
  </div>
  <div>
    <img src={slide3} alt="Slide 3" />
  </div>
  <div>
    <img src={slide4} alt="Slide 4" />
  </div>
    <div>
    <img src={slide5} alt="Slide 5" />
  </div>
    <div>
    <img src={slide6} alt="Slide 6" />
  </div>
    <div>
    <img src={slide7} alt="Slide 7" />
  </div>
</Slider>
</div>

  );
};

export default Home;

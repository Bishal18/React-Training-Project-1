//Bishal
import React from "react";
import config from "../configs/config";
import SlickSlider from "../utils/SlickSlider";
let settings = { autoplay: true };
const Carousel = props => {
  return (
    <SlickSlider {...settings}>
      {config.carouselImages.map(image => (
        <img
          className="carousel"
          alt={image.title}
          src={image.url}
          key={image.title}
        />
      ))}
    </SlickSlider>
  );
};

export default Carousel;

//Bishal 
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SlickSlider extends React.Component {
    render() {
      var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      };

      settings = {...settings,...this.props.settings}
      return (
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      );
    }
  }

  export default SlickSlider;
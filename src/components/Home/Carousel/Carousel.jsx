import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; 

// react-slick is CommonJS; Vite's production bundle hands back { default: Slider }
const Slider = SlickSlider.default ?? SlickSlider;

const Carousel = ({ carouselImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };


  return (
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselImages.map((imageUrl, index) => (
            <div key={index} className="carousel-item">
              <img
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default Carousel;

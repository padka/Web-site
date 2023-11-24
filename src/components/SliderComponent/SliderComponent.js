import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css'; 
import Plant1 from  '../../Image/image 3.png'; 
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={Plant1} alt="Plant 1" />
          <h2>Умные горшки для растений</h2>
          <button>Заказать</button>
        </div>
        <div className="slide">
          <img src={Plant1} alt="Plant 1" />
          <h2>Умные горшки для растений</h2>
          <button>Заказать</button>
        </div>
      </Slider>
      
    </div>
  );
};

export default SliderComponent;



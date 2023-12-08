
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className="slider-container mt-8">
      <Slider {...settings}>
        <div className="slider-item">
          <img src="./images/h0.png" alt="Slide 1" />
        </div>
        <div className="slider-item">
          <img src="./images/imgs1c.png" alt="Slide 2" />
        </div>
        <div className="slider-item">
          <img src="./images/h2.png" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default ImageSlider;

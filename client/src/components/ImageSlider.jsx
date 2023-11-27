import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="./images/h0.png" alt="Slide 1" className="w-350 h-150" />
      </div>
      <div>
        <img src="./images/imgs1c.png" alt="Slide 2" className="w-250 h-100" />
      </div>
      <div>
        <img src="./images/imgs1c.png" alt="Slide 3" className="w-250 h-100" />
      </div>  
      {/* Add more slides as needed */}
    </Slider>
  );
}

export default ImageSlider;
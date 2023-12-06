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
      <div style={{
        backgroundImage: 'url("./images/h0.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '150px',
         // Use the same height as your image
        // Use the same width as your image
      }}>
        <img src="./images/h0.png" alt="Slide 1" className=" h-100" />
      </div>
      <div style={{
        backgroundImage: 'url("./images/imgs1c.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '150px', // Use the same height as your image
         // Use the same width as your image
      }}>
        <img src="./images/imgs1c.png" alt="Slide 2" className=" h-100" />
      </div>
      <div style={{
        backgroundImage: 'url("./images/imgs1c.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '150px', // Use the same height as your image
       // Use the same width as your image
      }}>
        <img src="./images/imgs1c.png" alt="Slide 3" className=" h-100" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
}

export default ImageSlider;

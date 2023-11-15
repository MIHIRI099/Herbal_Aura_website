
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0.1,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  
  return (
    <Slider {...settings}>
      <div>
      <img src="./images/imgs1c.png" alt="Slide 1" className="w-250 h-100" />
      </div>
      <div>
      <img src="./images/imgs1c.png" alt="Slide 1" className="w-250 h-100" />
      </div>
      <div>
      <img src="./images/imgs1c.png" alt="Slide 1" className="w-250 h-100" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar-list">
          <li><a href="#home">HOME</a></li>
          <li><a href="#wellness">WELLNESS</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#hair-products">HAIR PRODUCTS</a></li>
          <li><a href="#skin-products">SKIN PRODUCTS</a></li>
          <li><a href="#prescription">PRESCRIPTION</a></li>
        </ul>
      </nav>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <NavigationBar />
      <ImageSlider />
    </div>
  );
};

export default Index;

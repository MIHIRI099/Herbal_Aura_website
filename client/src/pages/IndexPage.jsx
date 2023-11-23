// IndexPage.jsx
import NavigationBar from '../components/NavigationBar';
import ImageSlider from '../components/ImageSlider';
import Header from '../components/Header';
import ProductBox from '../components/ProductBox';

export default function IndexPage() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <ImageSlider />
      
      <div className="d-flex justify-content-center mt-4">
        {/* Render the first ProductBox */}
        <ProductBox
          image="path/to/product1-image.jpg"
          name="Product 1"
          description="Description for Product 1 goes here."
          price={29.99}
        />

        {/* Render the second ProductBox */}
        <ProductBox
          image="path/to/product2-image.jpg"
          name="Product 2"
          description="Description for Product 2 goes here."
          price={39.99}
        />
      </div>
    </div>
  );
}

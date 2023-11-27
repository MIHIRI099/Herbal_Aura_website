// IndexPage.jsx
import NavigationBar from '../components/NavigationBar';
import ImageSlider from '../components/ImageSlider';
import Header from '../components/Header';
import ProductBox from '../components/ProductBox';
import ProductFilter from '../components/ProductFilter';

export default function IndexPage() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <ImageSlider />
      <ProductFilter />
      <div className="flex flex-wrap justify-center items-center mt-4">
  {/* Render the first set of ProductBoxes */}
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/1.png"
      name="Product 1"
      description="Description for Product 1 goes here."
      price={29.99}
    />
  </div>

  {/* Render the second set of ProductBoxes */}
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/2.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>

  {/* Repeat this pattern to create more ProductBoxes */
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/2.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
  {/* Add more ProductBoxes as needed */
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/3.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
  
  {/* Repeat this pattern to create more ProductBoxes */
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/1.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
  {/* Add more ProductBoxes as needed */
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/2.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
   {/* Repeat this pattern to create more ProductBoxes */
   <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/2.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
  {/* Add more ProductBoxes as needed */
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/3.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
  
  {/* Repeat this pattern to create more ProductBoxes */
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/1.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
  {/* Add more ProductBoxes as needed */
  <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/2.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
    {/* Add more ProductBoxes as needed */
    <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/2.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
    {/* Add more ProductBoxes as needed */
    <div className="flex justify-center items-center m-2">
    <ProductBox
      image="./images/2.png"
      name="Product 2"
      description="Description for Product 2 goes here."
      price={39.99}
    />
  </div>
  }
</div>



    </div>
  );
}

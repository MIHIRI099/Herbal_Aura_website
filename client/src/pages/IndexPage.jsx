
// IndexPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import NavigationBar from '../components/NavigationBar';
import ImageSlider from '../components/ImageSlider';
import Header from '../components/Header';
import ProductBox from '../components/ProductBox';
import ProductFilter from '../components/ProductFilter';

// Sample product data
const allProducts = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    category: 'Category 1',
    image: '/images/img1.png',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 29.99,
    category: 'Category 2',
    image: '/images/img2.png',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: 29.99,
    category: 'Category 3',
    image: '/images/img3.png',
  },
  // ... your product data ...
];

const IndexPage = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const [filteredProducts, setFilteredProducts] = useState([...allProducts]);

  const handleFilterChange = (selectedCategories) => {
    const filteredProducts = allProducts.filter((product) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(product.category)
    );

    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <Header />
      <NavigationBar />
      <ImageSlider />
      <div className="flex py-10 ">
        <div className="flex flex-wrap justify-left items-left mt-4">
          <ProductFilter categories={categories} onFilterChange={handleFilterChange} />
        </div>
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="no-underline">
            {/* Move the Link component here */}
            <ProductBox
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

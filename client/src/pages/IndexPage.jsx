
// IndexPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import NavigationBar from '../components/NavigationBar';
import ImageSlider from '../components/ImageSlider';
import Header from '../components/Header';
import ProductBox from '../components/ProductBox';
import ProductFilter from '../components/ProductFilter';
import Footer from '../components/footer';

// Sample product data
const allProducts = [
  {
    id: 1, image: '/images/img1.png',name: 'Herbal oil product', price: 29.99,  category: 'Hair oil products',
  },
  {
    id: 2, image: '/images/img2.png',name: 'Nutrition product', price: 39.99,  category: 'Wellness products',
  },
  {
    id: 3, image: '/images/img3.png',name: 'Hare care product', price: 49.99,  category: 'Hair care products',
  },
  {
    id: 4, image: '/images/img4.png',name: 'Immunity Boosters', price: 59.99,  category: 'Wellness products',
  },
  {
    id: 5, image: '/images/img5.png',name: 'Face wash', price: 39.99,  category: 'Skin care products',
  },
  {
    id: 6, image: '/images/img6.png',name: 'Face cream', price: 89.99, category:'Skin care products',
  },
  {
    id: 7, image: '/images/img7.png',name: 'Body wash', price: 49.99,category:'Skin care products',
  },
  // ... your product data ...
];

const IndexPage = () => {
  const categories = ['Wellness products', 'Hair care products', 'Skin care products', 'Hair oil products'];
  const [filteredProducts, setFilteredProducts] = useState([...allProducts]);

  const [filteredCategories, setFilteredCategories] = useState([]);  // Add this line

  // ... (rest of your component)

  const handleFilterChange = (selectedCategories) => {
    // Check if the selectedCategories have changed
    if (!arraysAreEqual(selectedCategories, filteredCategories)) {
      // If changed, update the state
      setFilteredCategories(selectedCategories);

      // Update the filteredProducts based on the selectedCategories
      const filteredProducts = allProducts.filter((product) =>
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      );

      setFilteredProducts(filteredProducts);
    }
  };

  // Helper function to check if two arrays are equal
  const arraysAreEqual = (array1, array2) => {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
  };

  return (
    <div>
      <Header />
      <NavigationBar />
      <ImageSlider />
      <div className="flex flex-wrap justify-left items-left py-10">
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
      <Footer />
    </div>
  );
};

export default IndexPage;

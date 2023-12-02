// IndexPage.jsx
import  { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import ImageSlider from '../components/ImageSlider';
import Header from '../components/Header';
import ProductBox from '../components/ProductBox';
import ProductFilter from '../components/ProductFilter';

// Import other component

const IndexPage = () => {
  // Define your product categories
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  // State to keep track of filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Callback function to handle filter changes
  const handleFilterChange = (selectedCategories) => {
    // Implement your logic to filter products based on selected categories
    // Update the filteredProducts state accordingly
    // For simplicity, let's assume you have all products in an array called "allProducts"
    // Replace this logic with your actual data and filtering mechanism
    // eslint-disable-next-line no-undef
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
      <div className="flex ">
      <div className="flex flex-wrap justify-left items-left mt-4">
        <ProductFilter categories={categories} onFilterChange={handleFilterChange} />
      </div>
        {/* Render the filtered ProductBoxes */}
        {filteredProducts.map((product) => (
          <ProductBox
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

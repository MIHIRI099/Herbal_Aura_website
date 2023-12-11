import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageSlider from '../components/ImageSlider';
import ProductBox from '../components/ProductBox';
import ProductFilter from '../components/ProductFilter';

const IndexPage = () => {
  const categories = ['Wellness products', 'Hair care products', 'Skin care products', 'Hair oil products'];
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setAllProducts(data);
        setFilteredProducts(data); // Initially, show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (selectedCategories) => {
    setFilteredCategories(selectedCategories);

    // Update the filteredProducts based on the selectedCategories
    const filteredProducts = allProducts.filter((product) =>
      selectedCategories.length === 0 || selectedCategories.includes(product.category)
    );

    setFilteredProducts(filteredProducts);
  };

  return (
    <div className=''>
      <ImageSlider />
      <div className="flex justify-left items-left py-10 bg-gray-50">
        <div style={{ float: 'left', width: '35%', height: '70%', boxSizing: 'border-box', padding: '5px' }} className="flex justify-left items-left mt-4 w-35">
          <ProductFilter categories={categories} onFilterChange={handleFilterChange} />
        </div>
        <div className='flex flex-wrap'>
          {filteredProducts.map((product) => (
            <ProductBox
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              productId={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

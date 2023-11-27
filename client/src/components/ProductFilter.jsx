// src/components/ProductFilter.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        // Extract unique categories from products
        const uniqueCategories = [...new Set(response.data.map((product) => product.category))];
        setCategories(['All', ...uniqueCategories]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle category filter change
  const handleCategoryChange = (e) => {
    const category = e.target.value;

    if (category === 'All') {
      setSelectedCategories([]);
      setFilteredProducts(products);
    } else {
      const selected = [...selectedCategories, category];
      setSelectedCategories(selected);

      const filtered = products.filter((product) => selected.includes(product.category));
      setFilteredProducts(filtered);
    }
  };

  // Handle remove category from selected
  const removeSelectedCategory = (category) => {
    const updatedSelectedCategories = selectedCategories.filter((selected) => selected !== category);
    setSelectedCategories(updatedSelectedCategories);

    if (updatedSelectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => updatedSelectedCategories.includes(product.category));
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product Filter Chart</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Filter by Category:</label>
        <select
          className="p-2 border rounded"
          value={selectedCategories}
          onChange={handleCategoryChange}
          multiple
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">{product.category}</p>
            <p className="text-green-600 font-semibold">${product.price}</p>
          </div>
        ))}
      </div>

      {selectedCategories.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-semibold">Selected Categories:</p>
          <ul className="flex space-x-2">
            {selectedCategories.map((category) => (
              <li
                key={category}
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => removeSelectedCategory(category)}
              >
                {category} ✕
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;

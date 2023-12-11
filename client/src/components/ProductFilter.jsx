/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const ProductFilter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // Pass the selected categories to the parent component when it changes
    onFilterChange(selectedCategories);
  }, [selectedCategories, onFilterChange]);

  const handleCategoryChange = (category) => {
    // Toggle the selected state of the category
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        // Remove the category if it's already selected
        return prevCategories.filter((c) => c !== category);
      } else {
        // Add the category if it's not selected
        return [...prevCategories, category];
      }
    });
  };

  return (
    <div className="flex p-4">
      <div className="flex flex-col items-start bg-green-50 p-8 rounded-md shadow-md w-64">
        <h2 className="text-lg text-green-800 font-semibold mb-4">Filter by Category</h2>
        {categories.map((category) => (
          <label key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2 text-green-500 focus:ring-green-300"
              onChange={() => handleCategoryChange(category)}
              checked={selectedCategories.includes(category)}
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;

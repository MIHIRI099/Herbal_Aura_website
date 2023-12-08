/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React, { useState, useEffect } from 'react';

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
    <div className="flex flex-col items-start bg-green-50 p-4">
      <h2 className="text-lg text-green-800 font-semibold mb-2">Filter by Category</h2>
      {categories.map((category) => (
        <label key={category} className="flex items-center mb-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => handleCategoryChange(category)}
            checked={selectedCategories.includes(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default ProductFilter;

/* eslint-disable react/prop-types */
import { useState } from 'react';

const ProductFilter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    // Toggle the selected state of the category
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );

    // Pass the selected categories to the parent component
    onFilterChange(selectedCategories);
  };

  return (
    <div className="flex flex-col items-start bg-green-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Filter by Category</h2>
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

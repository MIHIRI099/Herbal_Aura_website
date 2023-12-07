// ProductCatalogPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductCatalogPage = () => {
  // Use the useParams hook to get the route parameters
  const { id } = useParams();
  console.log(id);

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

  // Assume allProducts is available in the scope
  const selectedProduct = allProducts.find((product) => product.id.toString() === id);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div>
        <h2>{selectedProduct.name}</h2>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <p>{selectedProduct.description}</p>
        <p>Price: ${selectedProduct.price.toFixed(2)}</p>
        <p>Category: {selectedProduct.category}</p>
      </div>
      <hr />
    </div>
  );
};

export default ProductCatalogPage;

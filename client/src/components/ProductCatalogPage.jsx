/* eslint-disable react/prop-types */
// ProductCatalogPage.jsx

import { useParams } from 'react-router-dom';

const ProductCatalogPage = ({ sampleProducts }) => {
  const { id } = useParams();

  // Find the product with the matching id
  const product = sampleProducts.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Render the product details using the 'product' object */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details like ratings and reviews */}
    </div>
  );
};

export default ProductCatalogPage;

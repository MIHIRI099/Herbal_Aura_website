// ProductCatalogPage.js

import { useParams } from 'react-router-dom';

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

const ProductCatalogPage = () => {
  const { productId } = useParams();

  // Assume allProducts is available in the scope
  const product = allProducts.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Category: {product.category}</p>
      </div>
      <hr />
    </div>
  );
};

export default ProductCatalogPage;

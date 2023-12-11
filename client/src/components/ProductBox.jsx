/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const ProductBox = ({ image, name, description, price, productId }) => {
    const navigate = useNavigate();

    const handleImageClick = () => {
      navigate(`/product/${productId}`);
    };

  const handleBuyNow = () => {
    // Add logic for "Buy Now" action
    // For example, you might want to add the product to the shopping cart
    alert(`Buying ${name}`);
  };

  const handleAddToCart = () => {
    // Add logic for "Add to Cart" action
    // For example, you might want to add the product to the shopping cart
    alert(`Adding ${name} to the cart`);
  };

  return (
    <div className='px-4 py-4'>
      <div style={{ width: '200px', height: '280px', border: '2px solid #E0E0E0', borderRadius: '8px' }} className='d-flex flex-column mx-2 rounded zoom bg-light shadow-lg bg-white'>
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px 8px 0 0', cursor: 'pointer' }}
          onClick={handleImageClick} // Navigate to /product/:id when the image is clicked
        />
        <div className='p-2'>
          <h5 className='text-uppercase font-bold'>{name}</h5>
          <p>{description}</p>
          <p className='font-weight-bold'>Price: ${price}</p>
          <div className="flex mt-3 space-x-0.5">
            <button onClick={handleBuyNow} className="bg-green-800 hover:bg-red-200 h-10 text-white text-xs font-bold py-2 px-4 rounded">
              Buy Now
            </button>
            <button onClick={handleAddToCart} className="bg-red-700 hover:bg-green-200 h-10 text-white text-xs font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;

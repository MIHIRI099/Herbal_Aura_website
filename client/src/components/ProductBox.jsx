/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductBox = ({ image, name, description, price, productId }) => {
    const navigate = useNavigate();

    const handleImageClick = () => {
      navigate(`/product/${productId}`);
    };

  const handleBuyNow = () => {
    navigate(`/checkout`);
    alert(`Buying ${name}`);
  };

  const handleAddToCart = () => {
    // Add logic for "Add to Cart" action
    const user = localStorage.getItem('user');
    //user is the email of the user
    //if user does not exist,aleart and redirect to login page
    if (!user) {
      alert("Please login to add to cart");
      navigate("/login");
      return;
    }
    const addcart = async () => {
      try {
        const { data } = await axios.post("/user/addcart", { productId, user });
        console.log(data);
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    };
    addcart();
    // For example, you might want to add the product to the shopping cart
    alert(`Added ${name} to the cart`);
    window.location.reload();
  };

  return (
    <div className='px-4 py-4'>
      <div style={{ width: '200px', height: '280px', border: '2px solid #E0E0E0', borderRadius: '8px' }} className='d-flex flex-column mx-2 rounded zoom bg-light shadow-lg bg-white'>
        <img
          className='hover:opacity-75 tranparent'
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
            <button onClick={handleBuyNow} className="bg-green-800 hover:bg-green-200 h-10 text-white text-xs font-bold py-2 px-4 rounded">
              Buy Now
            </button>
            <button onClick={handleAddToCart} className="bg-red-700 hover:bg-red-200 h-10 text-white text-xs font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;

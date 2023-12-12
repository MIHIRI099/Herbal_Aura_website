
import { Link } from "react-router-dom";
import CartTile from '../components/CartTile';
import { useState,useEffect } from 'react'; // Import the CartTile component
import axios from 'axios';


const CartPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const { data } = await axios.get("/user/cart");
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    getCartItems();
  }, []);

  const calculateTotal = (items) => {
    console.log(items);
    const quantity = 1;
    return items.reduce((total, item) => total + item.price * quantity, 0);
  };

  const handleRemoveItem = (itemId) => {
    // Remove the item with the specified itemId from the cart
    const removecart = async () => {
      try {
        const { data } = await axios.post("/user/deletecart", { itemId });
        console.log(data);
      } catch (error) {
        console.error("Error removing product to cart:", error);
      }
    };
    removecart();
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  
  const handleToggleCheckout = (itemId, isSelected, newQuantity) => {
    // Update the selected items and quantities in the state
    if (isSelected) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, { itemId, quantity: newQuantity }]);
    } else {
      setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((item) => item.itemId !== itemId));
    }
  };

  return (
    <div className='bg-green-50'>    
      <div className="">
        <div className="flex  py-4 px-2 rounded-m align-middle">
          <div className="flex  py-4 px-2 rounded-m'">
            <Link to={'/'} className='padding-left: px-5 rounded-m'>
              <div className='flex  items-center gap-1  border-green-400  py-1 px-2 text-green-200 bg bg-green-600 rounded-m'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
                <span className=' bottom-0 top-10 text-white text-xl'>Continue shopping</span>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <hr
            style={{
              borderTop: '2px solid green',
              width: '98%',
              margin: '20px auto',
            }}
          />
        </div>
        <h1 className="text-xl px-5 text-green-600 font-semibold mb-4 green">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
          ) : (
          <div>
            <div className="flex  border-b text-m px-4 text-green-600">
              <p >You have {cartItems.length} items in your cart.</p>
            </div>
            {/* Use CartTile component for each item */}
            {cartItems.map((item) => (
              <CartTile key={item.id} image={item.image} name={item.name} price={item.price} quantity={1} onRemove={() => handleRemoveItem(item.id)} 
                 onToggleCheckout={handleToggleCheckout}
              />
            ))}
            <div className="mt-4 px-20 ">
              <p className="text-xl font-semibold text-red-600 px-20">Total: Rs.{calculateTotal(cartItems).toFixed(2)}</p>
              <div className="flex  align-middle">
              <Link to={'/checkout'} className='padding-left: px-20 rounded-m'>
              <button className="bg-green-800 text-white px-4 py-2 mt-4">Proceed to Checkout</button>
              </Link>
              </div>
              <div className=" h-20">
                </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default CartPage;

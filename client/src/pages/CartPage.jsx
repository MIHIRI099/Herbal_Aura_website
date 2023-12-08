
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { Link } from "react-router-dom";
import CartTile from '../components/CartTile'; // Import the CartTile component

const CartPage = () => {
  const cartItems = [
    { id: 1, image: '/images/img1.png',name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, image: '/images/img2.png',name: 'Product 2', price: 39.99, quantity: 1 },
    { id: 3, image: '/images/img3.png',name: 'Product 3', price: 49.99, quantity: 1 },
  ];

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (itemId) => {
    // Implement your remove logic here
    console.log(`Remove item with ID ${itemId}`);
  };
  

  return (
    <div className=''>
      <Header />
      <NavigationBar />
      <div className="#D9D9D9">
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
            borderTop: '2px solid red',
            width: '98%',
            margin: '20px auto',
          }}
        />
      </div>
      <h1 className="text-xl px-5 text-red-600 font-semibold mb-4 red">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="flex  border-b text-m px-4 text-red-600">
            <p >You have {cartItems.length} items in your cart.</p>
          </div>
          {/* Use CartTile component for each item */}
          {cartItems.map((item) => (
            <CartTile key={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} onRemove={() => handleRemoveItem(item.id)} />
          ))}
          <div className="mt-4 px-20 ">
            <p className="text-xl font-semibold text-red-600 px-20">Total: Rs.{calculateTotal(cartItems).toFixed(2)}</p>
            <div className="flex  align-middle">
            <Link to={'/checkout'} className='padding-left: px-20 rounded-m'>
            <button className="bg-green-800 text-white px-4 py-2 mt-4">Proceed to Checkout</button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;

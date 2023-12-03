import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import CartTile from '../components/CartTile'; // Import your CartTile component

const CheckoutPage = () => {
  const [name, setName] = useState('John Doe'); // Replace with data from your database
  const [address, setAddress] = useState('123 Main St, City'); // Replace with data from your database
  const [paymentMethod, setPaymentMethod] = useState('cod'); // Default to Cash on Delivery

  const handleEditClick = () => {
    // Handle the edit button click to enable editing of name and address
  };

  const handleContinueClick = () => {
    // Handle the continue button click to proceed with the order
  };

  return (
    <div>
      <Header />
      <NavigationBar />

      <div className="flex py-4 px-2 rounded-m'">
        <Link to={'/cart'}>
          <div className='flex items-center gap-1 border-green-400 py-1 px-2 text-green-200 bg bg-green-600 rounded-m'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            <span className='bottom-0 top-10 text-white text-xl'>Continue shopping</span>
          </div>
        </Link>
      </div>

      <div className="flex">
        {/* Left Side */}
        <div className="w-2/3 p-4">
          <h1 className="text-xl font-semibold mb-4">Checkout</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="flex items-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full"
                disabled
              />
              <button onClick={handleEditClick} className="ml-2 bg-blue-500 text-white px-4 py-2">
                Edit
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
            <div className="flex items-center">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border p-2 w-full"
                disabled
              />
              <button onClick={handleEditClick} className="ml-2 bg-blue-500 text-white px-4 py-2">
                Edit
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Payment Method</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                Cash on Delivery
              </label>
              <label>
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                Card Payment
              </label>
            </div>
          </div>
          <button onClick={handleContinueClick} className="bg-blue-500 text-white px-4 py-2">
            Continue
          </button>
          <Link to="/cart" className="bg-gray-300 text-gray-700 px-4 py-2 ml-4">
            Go Back
          </Link>
        </div>

        {/* Right Side - Cart Summary */}
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          {/* Map through cart items and display CartTile component */}
          {/* Replace the dummy data below with your actual cart items */}
          <CartTile
            image="url_to_image"
            name="Product Name"
            description="Product Description"
            price={29.99}
            quantity={2}
            onRemove={() => console.log('Remove item')}
          />
          {/* Add more CartTile components for other cart items */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

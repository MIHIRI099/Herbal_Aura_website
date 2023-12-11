import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationDialog from '../components/ConfirmationDialog';
// Import your CartTile component

const CheckoutPage = () => {
  const [name, setName] = useState('John Doe'); // Replace with data from your database
  const [address, setAddress] = useState('123 Main St, City'); // Replace with data from your database
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isConfirmationOpen, setConfirmationOpen] = useState(false); // Default to Cash on Delivery
  const [isNameEditing, setNameEditing] = useState(false);
  const [isAddressEditing, setAddressEditing] = useState(false);
  const handleEditClick = (field) => {
    // Toggle edit mode for the specified field
    if (field === 'name') {
      setNameEditing(!isNameEditing);
    } else if (field === 'address') {
      setAddressEditing(!isAddressEditing);
    }
  };
  const handleContinueClick = () => {
    // Handle the continue button click to proceed with the order
    // Show the confirmation dialog
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    // Close the confirmation dialog
    setConfirmationOpen(false);
  };
  const cartItems = [
    { id: 1, image: '/images/img1.png',name: 'Herbal oil product', price: 29.99, quantity: 2 },
    { id: 2, image: '/images/img2.png',name: 'Nutrition product', price: 39.99, quantity: 1 },
    { id: 3, image: '/images/img3.png',name: 'Hare care product', price: 49.99, quantity: 1 },
  
  ];
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  return (
    <div className=''>
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

      <div className="grid grid-cols-2">
        {/* Left Side */}
        <div className="w-3/4 px-10 py-4">
          <h1 className="text-xl font-semibold mb-4">Checkout</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="flex items-center">
              {isNameEditing ? (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full"
                  />
                  <button
                    onClick={() => handleEditClick('name')}
                    className="ml-2 bg-green-500 text-white px-4 py-2"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="border p-2 w-full">{name}</span>
                  <button
                    onClick={() => handleEditClick('name')}
                    className="ml-2 bg-green-500 text-white px-4 py-2"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
            <div className="flex items-center">
              {isAddressEditing ? (
                <>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border p-2 w-full"
                  />
                  <button
                    onClick={() => handleEditClick('address')}
                    className="ml-2 bg-green-500 text-white px-4 py-2"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="border p-2 w-full">{address}</span>
                  <button
                    onClick={() => handleEditClick('address')}
                    className="ml-2 bg-green-500 text-white px-4 py-2"
                  >
                    Edit
                  </button>
                </>
              )}
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
          <button onClick={handleContinueClick} className="bg-green-500 text-white px-4 py-2">
            Continue
          </button>
          <Link to="/cart" className="bg-gray-300 text-gray-700 px-4 py-2 ml-4">
            Go Back
          </Link>
        </div>

        {/* Right Side - Cart Summary */}
        <div className="col-span-1 p-4 w-1/2 content-right bg-gray-100 border border-gray-300 rounded">
  <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

  {/* Cart Items */}
  <ul>
    {cartItems.map((item) => (
      <li key={item.id} className="flex justify-between mb-2">
        <span>{item.name}</span>
        <span>{item.quantity} x ${item.price.toFixed(2)}</span>
      </li>
    ))}
  </ul>

  {/* Total Price */}
  <div className="mt-4">
    <span className="font-semibold">Total:</span> ${totalPrice.toFixed(2)}
  </div>
</div>
        <ConfirmationDialog isOpen={isConfirmationOpen} onClose={handleConfirmationClose} />
      </div>
    </div>
  );
};

export default CheckoutPage;

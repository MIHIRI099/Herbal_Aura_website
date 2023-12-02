import Header from '../components/Header';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 39.99, quantity: 1 },
  ];

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (

    <div className="container mx-auto mt-8">
      <Header />
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <p className="text-xl font-semibold">Total: ${calculateTotal(cartItems).toFixed(2)}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

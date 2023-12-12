/* eslint-disable react/prop-types */

import  { useState } from 'react';

const CartTile = ({ id, image, name, description, price, quantity, onRemove, onToggleCheckout }) => {
 
  const [isSelected, setIsSelected] = useState(true);
  const tileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    borderRadius: '20px', // Circular corners
    backgroundColor: '#ffffff', // Fill color
    border: '1px solid #ddd',
    marginLeft: '150px',
    padding: '20px',
    marginBottom: '20px',
    marginTop: '20px',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '20px',
  };

  const contentStyle = {
    flex: '4',
    display: 'flex',
    
    alignItems: 'center',
    marginLeft: '20px',
    marginRight:'20px'
  };

  const textStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    marginLeft:'20px'
  };

  const detailsStyle = {
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    marginLeft: '20px',
  };

  const buttonStyle = {
    marginLeft: '20px',
    alignSelf: 'flex-end',
  };

  const [localQuantity, setLocalQuantity] = useState(quantity);

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
    onToggleCheckout(id, !isSelected); // Notify the parent component about the selection change
  };

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(1, localQuantity + amount);
    setLocalQuantity(newQuantity);
    try {
      const { data } = axios.post("/user/updatecart", { id, quantity: newQuantity });
      console.log(data);
    } catch (error) {
      console.error("Error updating product to cart:", error);
    }
    // Notify the parent component about the quantity change
    onToggleCheckout(id, isSelected, newQuantity);
  };

  return (
    <div style={tileContainerStyle }>
      {/* Assuming there's an image property in the data */}
      <div className="flex items-center justify-center px-5 ">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        style={{
          height: '15px',
          width: '15px',
          color:'green', 
          outlineColor:'green',
          // Add spacing to the right of the checkbox
          // Add any additional inline styles here
        }}
      />
      </div>
      <img src={image} alt={name} style={imageStyle} />
      <div style={contentStyle}>
        <div style={textStyle}>
          <h5 className='text-uppercase'>{name}</h5>
          <p>{description}</p>
        </div>
        <div style={detailsStyle}>
        <p className='font-weight-bold px-6'>Price: Rs.{price.toFixed(2)}</p>
        <div className='px-6'>
          <button onClick={() => handleQuantityChange(-1)} className="bg-green-500 text-white h-6 px-4 rounded">-</button>
          <span className="mx-2">{localQuantity}</span>
          <button onClick={() => handleQuantityChange(1)} className="bg-green-500 text-white h-6 px-4 rounded">+</button>
        </div>
        <p>Total: Rs.{(price * localQuantity).toFixed(2)}</p>
        <div style={buttonStyle}>
          <button onClick={() => onRemove()} className="bg-red-700 hover:bg-red-200 h-10 text-white text-xs font-bold py-2 px-4 rounded">
            Remove
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartTile;

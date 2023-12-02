/* eslint-disable react/prop-types */


/* eslint-disable react/prop-types */


const CartTile = ({ image, name, description, price, quantity, onRemove }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '60%', borderBottom: '1px solid #ddd', paddingLeft: '180px',paddingRight: '80px',paddingTop: '20px',paddingBottom: '20px' }}>
      {/* Assuming there's an image property in the data */}
      <img src={image} alt={name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }} />
      <div style={{ display: 'flex', flex: '1', justifyContent: 'space-between', alignItems: 'center', marginLeft: '20px' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <h5 className='text-uppercase'>{name}</h5>
          <p>{description}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <p className='font-weight-bold' style={{ marginRight: '20px' }}>Price: ${price.toFixed(2)}</p>
          <p style={{ marginRight: '20px' }}>Quantity: {quantity}</p>
          <p>Total: ${(price * quantity).toFixed(2)}</p>
          <div className="flex px-5">
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

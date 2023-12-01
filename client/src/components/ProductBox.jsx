/* eslint-disable react/prop-types */
const ProductBox = ({ image, name, description, price }) => {
    return (
        <div style={{ width: "200px", height: "300px" }} className='d-flex flex-column mx-2 rounded zoom bg-light'>
            <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px 8px 0 0" }} />
            <div className='p-2'>
                <h5 className='text-uppercase'>{name}</h5>
                <p>{description}</p>
                <p className='font-weight-bold'>Price: ${price}</p>
                <div className="flex space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductBox;

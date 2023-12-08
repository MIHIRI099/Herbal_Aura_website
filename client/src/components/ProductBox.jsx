/* eslint-disable react/prop-types */
const ProductBox = ({ image, name, description, price }) => {
    return (
        <div  className='px-4 py-4  '>
        <div style={{ width: "200px", height: "280px", border: "2px solid #E0E0E0", borderRadius: "8px"  }} className='d-flex flex-column mx-2 rounded zoom bg-light shadow-lg bg-white'>
            <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px 8px 0 0" }} />
            <div className='p-2'>
                <h5 className='text-uppercase font-bold'>{name}</h5>
                <p>{description}</p>
                <p className='font-weight-bold'>Price: ${price}</p>
                <div className="flex mt-3 space-x-0.5">
                    <button className="bg-red-700 hover:bg-red-200 h-10 text-white text-xs font-bold py-2 px-4 rounded">
                        Buy Now
                    </button>
                    <button className="bg-green-800 hover:bg-green-200 h-10 text-white text-xs font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductBox;

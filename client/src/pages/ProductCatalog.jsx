// ProductCatalogPage.js
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';
 // Import the StarIcon from Heroicons
import {StarIcon} from "@heroicons/react/24/solid"

const ProductCatalogPage = () => {
  const { id } = useParams();

  const allProducts = [
    {
      id: 1, image: '/images/img1.png',name: 'Herbal oil product', price: 29.99,  category: 'Hair oil products',
    },
    {
      id: 2, image: '/images/img2.png',name: 'Nutrition product', price: 39.99,  category: 'Wellness products',
    },
    {
      id: 3, image: '/images/img3.png',name: 'Hare care product', price: 49.99,  category: 'Hair care products',
    },
    {
      id: 4, image: '/images/img4.png',name: 'Immunity Boosters', price: 59.99,  category: 'Wellness products',
    },
    {
      id: 5, image: '/images/img5.png',name: 'Face wash', price: 39.99,  category: 'Skin care products',
    },
    {
      id: 6, image: '/images/img6.png',name: 'Face cream', price: 89.99, category:'Skin care products',
    },
    {
      id: 7, image: '/images/img7.png',name: 'Body wash', price: 49.99,category:'Skin care products',
    },
    {
      id: 8, image: '/images/img1.png',name: 'Herbal oil product', price: 29.99,  category: 'Hair oil products',
    },
    {
      id: 9, image: '/images/img2.png',name: 'Nutrition product', price: 39.99,  category: 'Wellness products',
    },
    {
      id: 10, image: '/images/img3.png',name: 'Hare care product', price: 49.99,  category: 'Hair care products',
    },
    {
      id: 11, image: '/images/img4.png',name: 'Immunity Boosters', price: 59.99,  category: 'Wellness products',
    },
    {
      id: 12, image: '/images/img5.png',name: 'Face wash', price: 39.99,  category: 'Skin care products',
    },
    {
      id: 13, image: '/images/img6.png',name: 'Face cream', price: 89.99, category:'Skin care products',
    },
    {
      id: 14, image: '/images/img7.png',name: 'Body wash', price: 49.99,category:'Skin care products',
    },
    {
      id: 15, image: '/images/img7.png',name: 'Body wash', price: 49.99,category:'Skin care products',
    },
    // ... your product data ...
  ];
  const selectedProduct = allProducts.find((product) => product.id.toString() === id);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }


  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    productInfo: {
      textAlign: 'left',
      
    },
    productName: {
      fontSize: '24px',
      marginBottom: '10px',
      textAlign: 'center',

    },
    productImage: {
      width: '100%', // Make the image fill its container
      maxHeight: '400px', // Set a maximum height for the image
      objectFit: 'cover', // Ensure the image covers the container
      marginBottom: '10px',

    },
    productDescription: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontColor:'green',
      marginBottom: '10px',
    },
    productPrice: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    productCategory: {
      fontSize: '16px',
    },
    hr: {
      border: '1px solid #ccc',
      margin: '20px 0',
    },
  };
  

  const reviews = [
    { id: 1, user: 'User1', rating: 4, comment: 'Great product!' },
    { id: 2, user: 'User2', rating: 5, comment: 'Excellent quality!' },
    { id: 2, user: 'User3', rating: 3, comment: 'Good product.'},
    { id: 4, user: 'User4', rating: 4, comment: 'Great product!' },
    { id: 4, user: 'User5', rating: 5, comment: 'Excellent quality!' },
    { id: 6, user: 'User6', rating: 3, comment: 'Good product.'}
    // Add more reviews as needed
  ];
  const filteredReviews = reviews.filter((review) => review.id === selectedProduct.id);

  const averageRating = calculateAverageRating(filteredReviews);

  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="flex items-center justify-center bg-gray-100 h-full">
        <div className="bg-white p-8 rounded-lg shadow-md w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto rounded-lg shadow-md"  // Adjust the styling here
                style={{ maxHeight: '700px' }}  // Set a maximum height for the image
              />
            </div>
            <div className="w-full">
              <h2 className="text-3xl font-semibold mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              <p className="text-green-600 text-lg font-semibold mb-4">
                Price: ${selectedProduct.price.toFixed(2)}
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Category: {selectedProduct.category}
              </p>
              <hr className="my-4" />

              {/* Reviews Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Customer Reviews</h3>
                {filteredReviews.map((review) => (
                  <div key={review.id} className="mb-4">
                    <p className="text-gray-800 font-semibold">{review.user}</p>
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-500 mr-1" />
                      <p className="text-gray-600">{review.rating} stars</p>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
                <p className="text-gray-800">
                  Average Rating: {averageRating.toFixed(1)} stars
                </p>
              </div>
              

              <div className="flex space-x-5 mt-8">
                <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-md">
                  Buy Now
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
                  Add to Cart
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return totalRating / reviews.length;
};

export default ProductCatalogPage;

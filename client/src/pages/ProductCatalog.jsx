/* eslint-disable no-unused-vars */
// ProductCatalogPage.js
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';
 // Import the StarIcon from Heroicons
import {StarIcon} from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProductCatalogPage = () => {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setAllProducts(data);
        setFilteredProducts(data); // Initially, show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // const allProducts = [
  //   {
  //     id: 1, image: '/images/img1.png',name: 'Herbal oil product', price: 29.99,  category: 'Hair oil products',
  //   },
  //   {
  //     id: 2, image: '/images/img2.png',name: 'Nutrition product', price: 39.99,  category: 'Wellness products',
  //   },
  //   {
  //     id: 3, image: '/images/img3.png',name: 'Hare care product', price: 49.99,  category: 'Hair care products',
  //   },
  //   {
  //     id: 4, image: '/images/img4.png',name: 'Immunity Boosters', price: 59.99,  category: 'Wellness products',
  //   },
  //   {
  //     id: 5, image: '/images/img5.png',name: 'Face wash', price: 39.99,  category: 'Skin care products',
  //   },
  //   {
  //     id: 6, image: '/images/img6.png',name: 'Face cream', price: 89.99, category:'Skin care products',
  //   },
  //   {
  //     id: 7, image: '/images/img7.png',name: 'Body wash', price: 49.99,category:'Skin care products',
  //   },
  //   {
  //     id: 8, image: '/images/img1.png',name: 'Herbal oil product', price: 29.99,  category: 'Hair oil products',
  //   },
  //   {
  //     id: 9, image: '/images/img2.png',name: 'Nutrition product', price: 39.99,  category: 'Wellness products',
  //   },
  //   {
  //     id: 10, image: '/images/img3.png',name: 'Hare care product', price: 49.99,  category: 'Hair care products',
  //   },
  //   {
  //     id: 11, image: '/images/img4.png',name: 'Immunity Boosters', price: 59.99,  category: 'Wellness products',
  //   },
  //   {
  //     id: 12, image: '/images/img5.png',name: 'Face wash', price: 39.99,  category: 'Skin care products',
  //   },
  //   {
  //     id: 13, image: '/images/img6.png',name: 'Face cream', price: 89.99, category:'Skin care products',
  //   },
  //   {
  //     id: 14, image: '/images/img7.png',name: 'Body wash', price: 49.99,category:'Skin care products',
  //   },
  //   {
  //     id: 15, image: '/images/img7.png',name: 'Body wash', price: 49.99,category:'Skin care products',
  //   },
  //   // ... your product data ...
  // ];
  const selectedProduct = allProducts.find((product) => product.id.toString() === id);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }
  

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
  
  const handleAddToCart = () => {
    // Add logic for "Add to Cart" action
    const user = localStorage.getItem('user');
    const productId = selectedProduct.id;
    //user is the email of the user
    //if user does not exist,aleart and redirect to login page
    if (!user) {
      alert("Please login to add to cart");
      navigate("/login");
      return;
    }
    const addcart = async () => {
      try {
        const { data } = await axios.post("/user/addcart", { productId, user });
        console.log(data);
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    };
    addcart();
    // For example, you might want to add the product to the shopping cart
    alert(`Added ${name} to the cart`);
    window.location.reload();
  };
  const handleBuyNow = () => {
    navigate(`/checkout`);
    alert(`Buying ${name}`);
  };

  return (
    <div className='flex-col '>
      <div className="flex items-center justify-center bg-gray-100 h-full">
        <div className="bg-white p-8 rounded-lg shadow-md w-full h-full justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-11/12">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto rounded-lg shadow-s"  // Adjust the styling here
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
                <button onClick={handleBuyNow} className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md">
                  Buy Now
                </button>
                <button onClick={handleAddToCart} className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-md">
                  Add to Cart
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around bg-green-100 h-full bg-white p-8">
        <h2 className="text-3xl font-semibold mb-4">Product Description</h2>
        <p className="text-gray-700">
          {selectedProduct.description}
        </p>
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

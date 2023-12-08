// ProductCatalogPage.js
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';

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
      <div className=" h-full">
        <div style={styles.container}>
          <div style={styles.productInfo}>
            <h2 style={styles.productName}>{selectedProduct.name}</h2>
            
            <div style={{float: 'left',width: '50%',height: '60%',boxSizing: 'border-box',padding: '20px',}}>
            <div className="flex flex-wrap  py-10">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={styles.productImage}
            />
            </div>
            </div>
            <div
        style={{float: 'left',width: '50%',boxSizing: 'border-box',padding: '20px',height: '60%',border: '1px solid #ccc',}} >
            <p style={styles.productDescription}>{selectedProduct.description}</p>
            <p style={styles.productPrice}>Price: ${selectedProduct.price.toFixed(2)}</p>
            <p style={styles.productCategory}>Category: {selectedProduct.category}</p>
          
          <hr style={styles.hr} />
          {/* Reviews Section */}
          <div style={styles.reviewsSection}>
            <h3 style={styles.reviewsTitle}>Customer Reviews</h3>
            {filteredReviews.map((review) => (
              <div key={review.id} style={styles.reviewItem}>
                <p style={styles.reviewUser}>{review.user}</p>
                <p style={styles.reviewRating}>Rating: {review.rating} stars</p>
                <p style={styles.reviewComment}>{review.comment}</p>
              </div>
            ))}
            <p style={styles.averageRating}>Average Rating: {averageRating.toFixed(1)} stars</p>
          </div>
          <div className="px-20 flex space-x-5">
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

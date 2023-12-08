// ProductCatalogPage.js
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';

const ProductCatalogPage = () => {
  const { id } = useParams();

  const allProducts = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      category: 'Category 1',
      image: '/images/img1.png',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      category: 'Category 2',
      image: '/images/img2.png',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 29.99,
      category: 'Category 3',
      image: '/images/img3.png',
    },
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
      textAlign: 'center',
    },
    productName: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    productImage: {
      width: '100%', // Make the image fill its container
      maxHeight: '400px', // Set a maximum height for the image
      objectFit: 'cover', // Ensure the image covers the container
      marginBottom: '10px',
    },
    productDescription: {
      fontSize: '16px',
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
    // Add more reviews as needed
  ];

  const averageRating = calculateAverageRating(reviews);

  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="bg-green-100">
        <div style={styles.container}>
          <div style={styles.productInfo}>
            <h2 style={styles.productName}>{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={styles.productImage}
            />
            <p style={styles.productDescription}>{selectedProduct.description}</p>
            <p style={styles.productPrice}>Price: ${selectedProduct.price.toFixed(2)}</p>
            <p style={styles.productCategory}>Category: {selectedProduct.category}</p>
          </div>
          <hr style={styles.hr} />

          {/* Reviews Section */}
          <div style={styles.reviewsSection}>
            <h3 style={styles.reviewsTitle}>Customer Reviews</h3>
            {reviews.map((review) => (
              <div key={review.id} style={styles.reviewItem}>
                <p style={styles.reviewUser}>{review.user}</p>
                <p style={styles.reviewRating}>Rating: {review.rating} stars</p>
                <p style={styles.reviewComment}>{review.comment}</p>
              </div>
            ))}
            <p style={styles.averageRating}>Average Rating: {averageRating.toFixed(1)} stars</p>
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

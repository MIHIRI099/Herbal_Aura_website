
// IndexPage.jsx

import { Link } from 'react-router-dom'; // Import Link
import NavigationBar from '../components/NavigationBar';

import Header from '../components/Header';
import ProductBox from '../components/ProductBox';

import Footer from '../components/footer';

// Sample product data
const allProducts = [  
  
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
  

];

const SkinCarePage = () => {

  return (
    <div className=''>
      <Header />
      <NavigationBar />
        <div className='flex flex-wrap'>
        {allProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="no-underline">
            {/* Move the Link component here */}
            <ProductBox
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
        </div>
      
      <Footer />
    </div>
  );
};

export default SkinCarePage;

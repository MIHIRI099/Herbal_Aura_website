
// IndexPage.jsx

import { Link } from 'react-router-dom'; // Import Link
import NavigationBar from '../components/NavigationBar';

import Header from '../components/Header';
import ProductBox from '../components/ProductBox';

import Footer from '../components/footer';

// Sample product data
const allProducts = [  
      
      {
        id: 3, image: '/images/img3.png',name: 'Hair care product', price: 49.99,  category: 'Hair care products',
      },
    
      {
        id: 10, image: '/images/img3.png',name: 'Hair care product', price: 49.99,  category: 'Hair care products',
      },
    

];

const WellnessPage = () => {

  return (
    <div className=''>
        <div className='flex flex-wrap'>
        {allProducts.map((product) => (
            <ProductBox
            key={product.id}
            image={product.image}
            name={product.name}
            //description={product.description}
            price={product.price}
            productId={product.id} 
            />
        ))}
        </div>
    </div>
  );
};

export default WellnessPage;

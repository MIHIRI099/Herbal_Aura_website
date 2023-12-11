
// IndexPage.jsx

import { Link } from 'react-router-dom'; // Import Link
import NavigationBar from '../components/NavigationBar';

import Header from '../components/Header';
import ProductBox from '../components/ProductBox';

import Footer from '../components/footer';

// Sample product data
const allProducts = [  
    {
        id: 1, image: '/images/img1.png',name: 'Herbal oil product', price: 29.99,  category: 'Hair oil products',
      },
    
      {
        id: 8, image: '/images/img1.png',name: 'Herbal oil product', price: 29.99,  category: 'Hair oil products',
      },
 

];

const HairOilPage = () => {

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

export default HairOilPage;

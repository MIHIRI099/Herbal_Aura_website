
// IndexPage.jsx

import { Link } from 'react-router-dom'; // Import Link
import NavigationBar from '../components/NavigationBar';

import Header from '../components/Header';
import ProductBox from '../components/ProductBox';

import Footer from '../components/footer';

// Sample product data
const allProducts = [  {
  id: 2, image: '/images/img2.png',name: 'Nutrition product', price: 39.99,  category: 'Wellness products',
},

{
  id: 4, image: '/images/img4.png',name: 'Immunity Boosters', price: 59.99,  category: 'Wellness products',
},


{
  id: 9, image: '/images/img2.png',name: 'Nutrition product', price: 39.99,  category: 'Wellness products',
},

{
  id: 11, image: '/images/img4.png',name: 'Immunity Boosters', price: 59.99,  category: 'Wellness products',
},

];

const WellnessPage = () => {

  return (
    <div className=''>
      <div className=''>
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
      </div>
    </div>
  );
  
};

export default WellnessPage;

/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import {  useLocation } from 'react-router-dom';
export default function NavigationBar() {
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();
  console.log(location);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="flex bg-green-800 border-b">
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${location.pathname === '/' ? 'bg-green-200 text-green-800' : ''}`}
        href={'/'}
        onClick={() => handleTabClick('home')}
      >
        Home
      </a>
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${location.pathname === '/wellness' ? 'bg-green-200 text-green-800' : ''}`}
        href={'/wellness'}
        onClick={() => handleTabClick('wellness')}
      >
        Wellness Products
      </a>
   
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${location.pathname === '/haircare' ? 'bg-green-200 text-green-800' : ''}`}
        href="/haircare"
        onClick={() => handleTabClick('haircare')}
      >
        Hair Care Products
      </a>
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${location.pathname === '/skincare' ? 'bg-green-200 text-green-800' : ''}`}
        href="/skincare"
        onClick={() => handleTabClick('skincare')}
      >
        Skin Care Products
      </a>
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400 f ${location.pathname === '/hairoil' ? 'bg-green-200 text-green-800' : ''}`}
        href="/hairoil"
        onClick={() => handleTabClick('hairoil')}
      >
        Hair Oil Products
      </a>
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${location.pathname === '/cart' ? 'bg-green-200 text-green-800' : ''}`}
        href={'/cart'}
        onClick={() => handleTabClick('cart')}
      >
        Cart
      </a>


      {/* <a className="bg-green-200 inline-block border-l border-t border-r rounded-t py-2 px-4 text-green-800 font-semibold" href={'/'}>HOME</a>
      <a className="bg-green-800 inline-block py-2 px-4 text-green-200 hover:text-green-400 font-semibold" href="#wellness">WELLNESS</a>
      <a className="bg-green-800 inline-block py-2 px-4 text-green-200 hover:text-green-400 font-semibold" href="#products">PRODUCTS</a>
      <a className="bg-green-800 inline-block py-2 px-4 text-green-200 hover:text-green-400 font-semibold" href="#hair-products">HAIR PRODUCTS</a>
      <a className="bg-green-800 inline-block py-2 px-4 text-green-200 hover:text-green-400 font-semibold" href="#skin-products">SKIN PRODUCTS</a>
      <a className="bg-green-800 inline-block py-2 px-4 text-green-200 hover:text-green-400 font-semibold" href="#prescription">PRESCRIPTION</a> */}
    </nav>
  );
}

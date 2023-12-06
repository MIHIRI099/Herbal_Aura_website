import React, { useState } from 'react';
export default function NavigationBar() {
  const [activeTab, setActiveTab] = useState('home');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="flex bg-green-800 border-b">
      <a
        className={`px-4 py-2 text-green-200 hover:text-green-400 font-semibold ${activeTab === 'home' ? 'bg-green-200 text-green-800' : ''}`}
        href={'/'}
        onClick={() => handleTabClick('home')}
      >
        HOME
      </a>
      <a
        className={`px-4 py-2 text-green-200 hover:text-green-400 font-semibold ${activeTab === 'wellness' ? 'bg-green-200 text-green-800' : ''}`}
        href="#wellness"
        onClick={() => handleTabClick('wellness')}
      >
        WELLNESS
      </a>
      <a
        className={`px-4 py-2 text-green-200 hover:text-green-400 font-semibold ${activeTab === 'products' ? 'bg-green-200 text-green-800' : ''}`}
        href="#products"
        onClick={() => handleTabClick('products')}
      >
        PRODUCTS
      </a>
      <a
        className={`px-4 py-2 text-green-200 hover:text-green-400 font-semibold ${activeTab === 'hair-products' ? 'bg-green-200 text-green-800' : ''}`}
        href="#hair-products"
        onClick={() => handleTabClick('hair-products')}
      >
        HAIR PRODUCTS
      </a>
      <a
        className={`px-4 py-2 text-green-200 hover:text-green-400 font-semibold ${activeTab === 'skin-products' ? 'bg-green-200 text-green-800' : ''}`}
        href="#skin-products"
        onClick={() => handleTabClick('skin-products')}
      >
        SKIN PRODUCTS
      </a>
      <a
        className={`px-4 py-2 text-green-200 hover:text-green-400 font-semibold ${activeTab === 'prescription' ? 'bg-green-200 text-green-800' : ''}`}
        href="#prescription"
        onClick={() => handleTabClick('prescription')}
      >
        PRESCRIPTION
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

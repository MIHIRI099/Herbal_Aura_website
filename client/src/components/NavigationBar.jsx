import  { useState } from 'react';
export default function NavigationBar() {
  const [activeTab, setActiveTab] = useState('');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="flex bg-green-800 border-b">
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${activeTab === 'home' ? 'bg-green-200 text-green-800' : ''}`}
        href={'/'}
        onClick={() => handleTabClick('home')}
      >
        Home
      </a>
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${activeTab === 'wellness' ? 'bg-green-200 text-green-800' : ''}`}
        href="#wellness"
        onClick={() => handleTabClick('wellness')}
      >
        Wellness Products
      </a>
   
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${activeTab === 'hair-products' ? 'bg-green-200 text-green-800' : ''}`}
        href="#hair-products"
        onClick={() => handleTabClick('hair-products')}
      >
        Hair Products
      </a>
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${activeTab === 'skin-products' ? 'bg-green-200 text-green-800' : ''}`}
        href="#skin-products"
        onClick={() => handleTabClick('skin-products')}
      >
        Skin Products
      </a>
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400 f ${activeTab === 'prescription' ? 'bg-green-200 text-green-800' : ''}`}
        href="#prescription"
        onClick={() => handleTabClick('prescription')}
      >
        Prescription
      </a>
      <a
        className={`px-10 py-2 text-green-200 hover:text-green-400  ${activeTab === 'cart' ? 'bg-green-200 text-green-800' : ''}`}
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

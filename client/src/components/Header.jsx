import { useContext ,useState,useEffect}from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import axios from "axios";


export default function Header() {
  const {user, setUser} = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {  
      try {
        const { data } = await axios.get("/user/numcart");
        setNumberOfCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);
  


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

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().startsWith(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Redirect to search results page or product page
    console.log("Search query:", searchQuery);
    // Clear the search input after submitting the form
    setSearchQuery("");

    // Redirect to the product page if there is a single matching result
    if (filteredProducts.length === 1) {
      const productId = filteredProducts[0].id;
      navigate(`/product/${productId}`); // Use navigate instead of history.push
    }
  };

  const handleProductClick = (productId) => {
    // Redirect to the product page when a suggestion is clicked
    navigate(`/product/${productId}`); // Use navigate instead of history.push
    // Clear the search input after clicking a suggestion
    setSearchQuery("");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    // Clear the user object from the context
    // Clear the user object from the local storage
    //allert user logged out
    alert("You have been logged out");
    setUser(null);
    
    // Redirect to the home page
    //remove token from local storage
    localStorage.removeItem("user");
    navigate("/");
  };

  const userToken = localStorage.getItem("user");
  return (
    <header className='flex bg-white justify-center p-4'>
      <a href="" className='flex items-center gap-1 text-green-200 padding-left: px-10'>
        <img src=".\images\HERBAL logo.png" alt="" className="w-14 h-14" />
        <span className='bottom-0 top-10 text-green-600 text-xl'>HERBAL AURA</span>
      </a>
    <form onSubmit={handleSearchSubmit} className='relative flex items-center border border-green-800 rounded-full px-2'>
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search here..."
      className='flex-grow outline-none border-none px-2 py-1'
    />
    <button type="submit" className='flex items-center gap-2 border border-green-800 rounded-full py-1 px-2 text-green-200 bg-green-800 hover:bg-green-600'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 15.5l5.5 5.5" />
        <circle cx="11" cy="11" r="8" />
      </svg>
    </button>
    {searchQuery && filteredProducts.length > 0 && (
      <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md overflow-hidden">
      {filteredProducts.map(product => {
        // Split the name into matching and remaining parts
        const index = product.name.toLowerCase().indexOf(searchQuery.toLowerCase());
        const matchingPart = product.name.substring(0, index + searchQuery.length);
        const remainingPart = product.name.substring(index + searchQuery.length);
        return (
            <div
            key={product.id}
            className="p-3 cursor-pointer hover:bg-gray-100"
            onClick={() => handleProductClick(product.id)}
            >
            <span className="text-black">{matchingPart}</span>
            <span className="text-gray-500">{remainingPart}</span>
          </div>
          );
       })}
      </div>
      )}
    </form>
      <Link to="/cart" className='relative px-20'>
        <div className='flex items-center gap-5 border border-green-800 rounded-full py-2 px-2 text-green-200 bg bg-green-800 relative hover:bg-green-600'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          {userToken && numberOfCartItems > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {numberOfCartItems}
        </div>
        )}
        </div>
       </Link>
       <div className="flex items-center">
        {userToken ? (
        <button onClick={handleLogout} className="ml-0 px-1 bg-red-500 hover:bg-red-400 text-white py-1 px-8 rounded-full">
          Logout
         </button>
        ) : (
        <button onClick={handleLogin} className="ml-0 px-1 bg-green-800 hover:bg-green-600 text-white py-1 px-8 rounded-full">
          Login
        </button>
      )}
      <Link to="/register" className='px-4'>
        <div className='flex items-center gap-1 border border-green-400 rounded-full py-2 px-2 text-green-200 bg bg-green-800'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          {!!user && (
            <div>
              {user.full_name}
            </div>
          )}
        </div>
      </Link>
      
    </div>
    </header>
  );
}

  
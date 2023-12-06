import { useContext ,useState}from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";

export default function Header() {
  const {user} = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
      e.preventDefault();
      // Implement your search logic here, for example, redirect to a search results page
      console.log("Search query:", searchQuery);
      // Clear the search input after submitting the form
      setSearchQuery("");
  };
  const numberOfCartItems = 1;

  return (
    <header className='flex bg-white justify-center p-4'>
      <a href="" className='flex items-center gap-1 text-green-200 padding-left: px-10'>
        <img src=".\images\HERBAL logo.png" alt="" className="w-14 h-14" />
        <span className='bottom-0 top-10 text-green-600 text-xl'>HERBAL AURA</span>
      </a>
      <form onSubmit={handleSearchSubmit} className='flex items-center border border-green-800 rounded-full px-6'>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search here..."
          className='flex-grow outline-none border-none px-4 py-1'
        />
        <button type="submit" className='flex items-center gap-2 border border-green-800 rounded-full py-1 px-4 text-green-200 bg-green-800 hover:bg-green-600'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 15.5l5.5 5.5" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </button>
      </form>
      <Link to="/cart" className='relative px-20'>
        <div className='flex items-center gap-5 border border-green-800 rounded-full py-2 px-2 text-green-200 bg bg-green-800 relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          {numberOfCartItems > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {numberOfCartItems}
            </div>
          )}
        </div>
      </Link>
      <div className="flex items-center">
      <Link to="/login" className="ml-0 px-1">
        <button className="bg-green-800 hover:bg-green-600 text-white py-1 px-8 rounded-full">
          LogIn
        </button>
      </Link>
      <Link to={'/login'} className='px-4'>
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
  
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";

export default function Header() {
    const {user} = useContext(UserContext);
    return(
        <header className='p-2 flex justify-center' >
          <a href="" className='flex items-center gap-1  text-green-200 padding-left: px-20'>
          <img src=".\images\HERBAL logo.png" alt="" className="w-14 h-14"  />
          <span className=' bottom-0 top-10 text-green-600 text-xl'>HERBAL AURA</span>
          </a>
          <div className='flex gap-1 border border-green-800 rounded-full py-2 px-4 shadow-md shadow-green-200 text-green-600 '>
          <div></div>
          <div className='px-40 flex items-center'>Search here......</div>
          <div className="border-l border-green-400 "></div>
          <button className='bg bg-green-800 text-white p-1 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
       <Link to="/login" className='padding-left: px-20 '>
         <div className='flex items-center gap-5 border border-green-800 rounded-full py-2 px-2 text-green-200 bg bg-green-800  '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
       </Link>
       <Link to={'/login'} className='padding-left: px-5'>
        <div className='flex  items-center gap-1 border border-green-400 rounded-full py-2 px-2 text-green-200 bg bg-green-800 '>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
           </svg>
        </div>
       {!!user && (
         <div>
          {user.full_name}
         </div>
       )} 
      </Link>
      <Link to="/login" className='padding-left: px-1 '>
        <button className='flex gap-2 border border-white py-3 px-5 text-green-200 bg bg-green-800'>
          Log In
        </button>
      </Link>
      </header>
    );

}
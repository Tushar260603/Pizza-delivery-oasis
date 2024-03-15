
import React, { useState } from 'react'
import imgg from "../images/logo.png"
import userimg from "../images/user.png"
import {LinkContainer} from "react-router-bootstrap"
import { GiHamburgerMenu } from "react-icons/gi";
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  
    let Links =[
      {name:"Home",link:"/"}, 
      {name:"Contact",link:"/contact"},
    
  
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 h-[50px]'>
      <div className='md:flex items-center justify-between bg-orange-500 h-[80px] py-4 md:px-10 px-7 '>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
     
        </span>
       <img alt='' src={imgg} style={{width:"80px"}}  />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <GiHamburgerMenu />
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
         
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500' style={{fontFamily:"cursive",color:"white",fontWeight:"bold"}}>{link.name}</Link>
            </li>
          ))
        }

    {
      currentUser ? (
      <>
 


     <li key={currentUser.name} className='md:ml-8 text-xl md:my-0 my-7 flex  '>
     <Link to="/profile" className='text-gray-800 hover:text-gray-400 duration-500' style={{fontFamily:"cursive",color:"white",fontWeight:"bold" }}> <img style={{width:"35px"}} src={userimg} alt='' className='mx-2'  /></Link>
              <Link to="/profile" className='text-gray-800 hover:text-gray-400 duration-500' style={{fontFamily:"cursive",color:"black",fontWeight:"bold" }}>  {currentUser.name}</Link>
            </li>
          
         
      </>
      
      
      
    
   
    ) : <> <li key="login" className='md:ml-8 text-xl md:my-0 my-7'>
    <Link to="/login" className='text-gray-800 hover:text-gray-400 duration-500' style={{fontFamily:"cursive",color:"white",fontWeight:"bold"}}>Login</Link>
  </li>
  <li key="register" className='md:ml-8 text-xl md:my-0 my-7'>
    <Link to="/register" className='text-gray-800 hover:text-gray-400 duration-500' style={{fontFamily:"cursive",color:"white",fontWeight:"bold"}}>Register</Link>
  </li></>
      
    }

       <li key="cart" className='md:ml-8 text-xl md:my-0 my-7'>
          <Link to="/cart" className='text-gray-800 hover:text-gray-400 duration-500' style={{fontFamily:"cursive",color:"white",fontWeight:"bold"}}> Cart {cartState.cartItems.length}</Link>
        </li>
       
      </ul>
      </div>
    </div>
  )
}

export default Nav
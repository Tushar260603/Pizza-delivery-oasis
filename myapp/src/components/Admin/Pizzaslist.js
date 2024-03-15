import React, { useEffect } from 'react'
import Pizza from '../../components/Pizza'
// import { Col, Container, Row } from 'react-bootstrap'
import {motion} from "framer-motion"

import {useDispatch,useSelector } from "react-redux"

import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import Pizza2 from '../Pizza2';










const Pizzaslist = () => {
  const dispatch=useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  console.log(pizzas.length)
 
  const automated = async () => {
const email="avhadtushar68@gmail.com";

    // Make a request to your backend to trigger the email sending logic
    try {
      const response = await fetch('/api/pizzas/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
     
      // Handle response if needed
    } catch (error) {
      console.error('Error sending email:', error);
    }
  
  };


  useEffect(()=>{
    dispatch(getAllPizzas())
    if(pizzas.length<5){
      automated()
    }
  },[dispatch])




  return (
    <>
    <h1 style={{fontFamily:"cursive",fontWeight:"bold",fontSize:"24px"}} className='text-center mt-20'> All Products</h1>
{
  loading?(<Loader />)
  : error ?(<Error> {error} </Error>)
  : 
  <motion.div 
 animate={{scale:1}} initial={{scale:0}} className='max-w-[1120px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-6 mt-10'>
     {
       pizzas &&  pizzas.map((pizza)=>(
        <>
        <div>
             <Pizza2 pizza={pizza} key={pizza}  />
 

             </div>
</>
          ) )
     }
  </motion.div>
}


 {/* <div ><img className='mt-10' style={{width:"100%"}} src={imgg} alt=""  /></div> */}

    </>
  )
}

export default Pizzaslist

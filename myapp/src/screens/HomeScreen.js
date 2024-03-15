import React, { useEffect } from 'react'
import Pizza from '../components/Pizza'
// import { Col, Container, Row } from 'react-bootstrap'
import {motion} from "framer-motion"
import imgg from "../images/pizza12.jpg"
import Edit from '../components/Edit'
import {useDispatch,useSelector } from "react-redux"
import { getAllPizzas } from '../actions/pizzaAction'
import Loader from '../components/Loader'
import Error from '../components/Error'

const HomeScreen = () => {
  const dispatch=useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  console.log(pizzas)
  useEffect(()=>{

    dispatch(getAllPizzas())
  },[dispatch])
  return (
    <>
    <h1 style={{fontFamily:"cursive",fontWeight:"bold",fontSize:"24px"}} className='text-center mt-20'> All Products</h1>
{
  loading?(<Loader />)
  : error ?(<Error> {error} </Error>)
  : 
  <motion.div 
 animate={{scale:1}} initial={{scale:0}}
  
  className='max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10'>
     {
         pizzas.map((pizza)=>(
             <Pizza pizza={pizza} key={pizza}  />
          ) )
     }
  </motion.div>
}


 {/* <div ><img className='mt-10' style={{width:"100%"}} src={imgg} alt=""  /></div> */}

    </>
  )
}

export default HomeScreen

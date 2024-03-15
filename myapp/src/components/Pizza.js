import React, { useState } from 'react'
import {motion} from "framer-motion"
import { useDispatch } from "react-redux";
import {Button} from "react-bootstrap"
import { addToCart } from "../actions/cartAction";
import  Modal  from 'react-bootstrap/Modal';
const Pizza = ({pizza}) => {
  const [varient, setVarient] = useState("small");
  const [sauces, setsauce] = useState("Tomato");
  const [cheese, setcheeset] = useState("cheddar");
  const [veggies, setveggies] = useState("onion");

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient,sauces,cheese,veggies));
  };


  return (
    <>


   <motion.div  
 className='shadow-lg'
     >
   
    <img src={pizza.image} alt="" className='duration-1000 hover:scale-110 ' 
    style={{cursor:"pointer"}}
  
     />
                        
                                      
   <h1 style={{fontFamily:"cursive",fontWeight:"bold",marginBottom:"1rem"}} className='my-3 text-center'>{pizza.name} </h1>

   <div className='flex justify-between mb-2' >

<div >
    <h1 style={{fontFamily:"cursive",fontWeight:"bold" }}>Sauces </h1>
                <select className='bg-slate-200'
     value={sauces}
     onChange={(e) => setsauce(e.target.value)}
   >
              <option>{pizza.sauces[0]["sauce1"]}</option>
              <option>{pizza.sauces[0]["sauce2"]}</option>
              <option>{pizza.sauces[0]["sauce3"]}</option>
              <option>{pizza.sauces[0]["sauce4"]}</option>
              <option>{pizza.sauces[0]["sauce5"]}</option>
                </select>
                </div>

                <div>
             <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Cheese </h1>
                <select className='bg-slate-200'
     value={cheese}
     onChange={(e) => setcheeset(e.target.value)}
   >
              <option>{pizza.cheese[0]["cheese1"]}</option>
              <option>{pizza.cheese[0]["cheese2"]}</option>
              <option>{pizza.cheese[0]["cheese3"]}</option>
              <option>{pizza.cheese[0]["cheese4"]}</option>
           
                </select>
                </div>

                <div>
                <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Veggies </h1>
                <select className='bg-slate-200'
     value={veggies}
     onChange={(e) => setveggies(e.target.value)}
   >
              <option>{pizza.veggies[0]["veg1"]}</option>
              <option>{pizza.veggies[0]["veg2"]}</option>
              <option>{pizza.veggies[0]["veg3"]}</option>
              <option>{pizza.veggies[0]["veg4"]}</option>
           
                </select>
                </div>

                </div>



   <div className='flex justify-around '>
   <div className='ml-10 mb-2 ' >

   <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Varients </h1>
   <select className='bg-slate-200'
     value={varient}
     onChange={(e) => setVarient(e.target.value)}
   >
                  {pizza.varients.map((varient) => (
                    <option key={varient} >  {varient}</option>
                  ))}
                </select>


               




   </div>
   <div>


    <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Quantity</h1>
   <select className='bg-slate-200'
   value={quantity}
   onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i + 1} value={i + 1}>
                       {i + 1}
                    </option>
                  ))}
                </select>

               

   </div>


   </div>
 
<h1 style={{fontFamily:"cursive",fontWeight:"bold"}} className='mx-2  my-4 mb ' >Price ~  {pizza.prices[0][varient] * quantity} /-RS </h1>
<p style={{fontFamily:"cursive",fontWeight:"bold"}} className='mx-2 mb-2'>{pizza.description}</p>
<button class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded mb-2"  onClick={addToCartHandler}
>
Add to cart
</button>

   </motion.div>

  



</>
  )
}

export default Pizza

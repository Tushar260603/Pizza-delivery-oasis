import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from '../components/Checkout';
const CartScreen = () => {
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

   
   

 


    return (
       <>
       <h1 style={{fontFamily:"cursive",marginTop:"100px" ,textAlign:"center",marginBottom:"30px",fontSize:"2rem",fontWeight:"bold"}} > My Cart </h1>
       <div className="" style={{marginBottom:"15%"}}>
       {
        cartItems.map((item)=>(
            <>
             <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center mb-8'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={item.image} alt={item.name} style={{width:"70%",height:"30%"}} className=' mx-auto duration-1000 hover:scale-110'/>
              
            </div>
            {/* ABOUT */}
            <div className='mnb-3 flex flex-col gap-4 lg:w-2/4'>
                <div>
                <h1 className='text-3xl font-bold' style={{fontFamily:"cursive"}}>{item.name}</h1>
                    <span className=' text-orange-700 font-semibold ' style={{marginLeft:"9rem"}}>*{item.varient}*</span>
                   
                </div>
                <p className='text-gray-700' style={{fontFamily:"cursive",fontWeight:"bold"}}>
              {item.description}
                </p>
                <h6 className='text-2xl font-semibold' style={{fontFamily:"cursive"}}>{item.price} /-RS</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl'
                        
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }} 
                        
                        >-</button>
                        <span className='py-4 px-6 rounded-lg'>{item.quantity}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl'   
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            dispatch(
                              addToCart(item, item.quantity + 1, item.varient)
                            );
                          }} 
                        
                        >+</button>
                    </div>
                    <button className='bg-red-600 text-white font-semibold py-3 px-16 rounded-xl h-full '  
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}>Delete from Cart</button>
                </div>
            </div>
        </div>
       
            </>
        ))
       }
</div>
<div className="fixed bottom-6 right-6 bg-white p-6 shadow-lg rounded-lg max-h-full overflow-y-auto ">
      <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
      <div className="mb-4">
        <p className="text-gray-600">Total Amount:</p>
        <p className="text-lg font-semibold">{subTotal} /-</p>
      </div>
    
      <Checkout subTotal={subTotal} />
    
    </div>

{/* 
        <h1>Payment Info</h1>
            <h4>Sub Total </h4>
            <h4>RS : {subTotal} /-</h4>
            <Checkout subTotal={subTotal} /> */}
       </>
    )
}

export default CartScreen
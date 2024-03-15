import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {Truck,PackageCheck} from "lucide-react"
const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  
  return (
    
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto" style={{marginTop:"130px"}}>
     
   
      {orders &&
        orders.map((order,i) => (<>
          
  <div class="flex justify-start item-start space-y-2 flex-col">
  <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800"  style={{fontFamily:"cursive"}}>Order #{i+1}</h1>
  <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600"  style={{fontFamily:"cursive"}}>20{order.createdAt.substr(2,8)}</p>
</div>

<div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">

    <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            
    <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800"  style={{fontFamily:"cursive"}}>Customer’s Cart</p>

 {order.orderItems.map((item) => (
<>

        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div class="pb-4 md:pb-8 w-full md:w-40">
            <img class="w-full hidden md:block" src={item.image} alt="dress" />
            <img class="w-full md:hidden" src={item.image} alt="dress" />
          </div>
          <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
              <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800" style={{fontFamily:"cursive"}}>{item.name}</h3>
            
              <div class="grid lg:grid-cols-4 gap-5 ">
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300"  style={{fontFamily:"cursive"}}>varient: </span ><h1  style={{fontFamily:"cursive"}}>{item.varient}</h1></p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300"  style={{fontFamily:"cursive"}}>sauces: </span ><h1  style={{fontFamily:"cursive"}}>{item.sauces}</h1></p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300"  style={{fontFamily:"cursive"}}>cheese: </span ><h1  style={{fontFamily:"cursive"}}>{item.cheese}</h1></p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300"  style={{fontFamily:"cursive"}}>Veggies: </span ><h1  style={{fontFamily:"cursive"}}>{item.veggies}</h1></p>
              </div>

            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
              <p class="text-base dark:text-white xl:text-lg leading-6" style={{fontFamily:"cursive"}}>{item.price} /-RS <span class="text-red-300 line-through"></span></p>
              <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800"  style={{fontFamily:"cursive"}}>{item.quantity}</p>
              <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800"  style={{fontFamily:"cursive"}}>{item.price} /-RS</p>
            </div>
          </div>
        </div>
</>

  ))
}
<div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800"  style={{fontFamily:"cursive"}}>Summary</h3>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div class="flex justify-between w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800" style={{fontFamily:"cursive"}}>Subtotal</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600"  style={{fontFamily:"cursive"}}> {order.orderAmount} /-RS</p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800 " style={{marginRight:"10px",fontFamily:"cursive"}} >Ordered <span class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">Items</span></p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600"  style={{fontFamily:"cursive"}}>{order.orderItems.length} </p>
            </div>
           
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800" style={{fontFamily:"cursive"}}>Total</p>
            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600" style={{fontFamily:"cursive"}}> {order.orderAmount}/-RS</p>
          </div>
        </div>
        <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
          <div class="flex justify-between items-start w-full">
            <div class="flex justify-center items-center space-x-4">
              <div class="w-8 h-8">
                <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
              </div>
              <div class="flex flex-col justify-start items-center">
                <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD Delivery<br /><span class="font-normal">Delivery with 1 Hour</span></p>
              </div>
            </div>
            <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">{order.orderAmount}/-RS</p>
          </div>
          {/* <div class="w-full flex justify-center items-center">
            <button class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
          </div> */}
   

        </div>
      </div>

          </div>
     
         
    </div>
    <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800 "  style={{fontFamily:"cursive"}}>Customer</h3>
      <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div class="flex flex-col justify-start items-start flex-shrink-0">
          <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
            <div class="flex justify-start items-start flex-col space-y-2">
              <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800" style={{fontFamily:"cursive"}} >{order.name}</p>
            
            </div>
          </div>

          <div class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="cursor-pointer text-sm leading-5 "   style={{fontFamily:"cursive"}} >{order.email}</p>
          </div>
        </div>
        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800"  style={{fontFamily:"cursive"}}>Shipping Address</p>
            <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"  style={{fontFamily:"cursive"}}>{order.shippingAddress.street},{order.shippingAddress.pincode} {order.shippingAddress.city},{order.shippingAddress.country}</p>
            </div>
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800"  style={{fontFamily:"cursive"}}>Billing Address</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"  style={{fontFamily:"cursive"}}>{order.shippingAddress.street},{order.shippingAddress.pincode} {order.shippingAddress.city},{order.shippingAddress.country}</p>
            </div>
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800"  style={{fontFamily:"cursive"}}>Delivery status :-</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"  style={{fontFamily:"cursive"}}>{order.isDeliverd===true?<div className="flex justify-between"><PackageCheck/> your order is<span style={{fontFamily:"cursive",fontWeight:"bold"}}>Delivered</span>  </div> :<div className="flex justify-between"> <Truck/>your order is <span style={{fontFamily:"cursive",fontWeight:"bold"}}> Dispatched</span>  </div>}</p>
            </div>
          </div>
          {/* <div class="flex w-full justify-center items-center md:justify-start md:items-start">
            <button class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Details</button>
          </div> */}
        </div>
      </div>
    </div>
    </div>     
         
          </> ))}
   
    
    </div>
  );
};

export default OrderScreen;









import React, { useState } from "react";

import {
  ArrowLeftRightIcon,
  ClipboardList,
  Users,
  Pizza,CirclePlus
 
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";



const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "h-screen w-64 bg-gray-800 text-white flex flex-col fixed top-0 left-0 overflow-y-auto z-50" +
        (isExpanded ? " px-10" : " px-6")
      }
      style={{marginTop:"80px",zIndex:"1",marginRight:"10px"}}
    >
      
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6  flex justify-center items-center"
      >
        {/* <img src={RightArrowIcon} className="w-2" /> */}
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6  flex justify-center items-center"
      >
        {/* <img src={RightArrowIcon} className="w-2" /> */}
      </div>
     
      <div className="logo-div flex space-x-4 items-center">
        {/* <img src={Logo} /> */}
        <span className="mx-auto" style={{fontFamily:"cursive",fontWeight:"bold"}} >  Admin Panel</span>
      </div>
      <div className="flex flex-col space-y-8 mt-12">

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded "> 
            <Users />
            <NavLink  to="/admin/userlist" style={{cursor:"pointer",fontFamily:"cursive",fontWeight:"bold"}} ><button>All Users</button></NavLink>
           </div>
        </div>

        <div className="nav-links w-full">
        <div className="flex space-x-3 w-full p-2 rounded "> 
          <Pizza strokeWidth={2.5} />
            <Link activeClassName to="/admin/pizzaslist" style={{cursor:"pointer",fontFamily:"cursive",fontWeight:"bold"}}  className={!isExpanded ? "hidden" : "block"}>All Pizzas</Link>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded ">
            <CirclePlus />
            <Link activeClassName="active" to="/admin/addnewpizza" style={{cursor:"pointer",fontFamily:"cursive",fontWeight:"bold"}} className={!isExpanded ? "hidden" : "block"}>Add New Pizza</Link>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded">
           <ClipboardList />
            <Link activeClassName to="/admin/orderlist" style={{cursor:"pointer",fontFamily:"cursive",fontWeight:"bold"}} className={!isExpanded ? "hidden" : "block"}>
             OrderList
            </Link>
          </div>
        </div>

     
      </div>
    </motion.div>
  );
}

export default Navbar;
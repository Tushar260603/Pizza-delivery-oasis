import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
const navigate=useNavigate();

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
          window.location.href = "/";
        }
      }, []);
      const loginHandler = () => {
        const user = { email, password };
        dispatch(loginUser(user));
        alert("User Login Successfully");
     navigate("/")
      };
  return (
    <div>
         <div className=" min-h-screen bg-gray-800 py-6 flex flex-col justify-center  sm:py-12 " >
    <div className="h-[450px]">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-17">
        <div className="text-center pb-6">
          <h1 className="text-3xl" style={{fontFamily:"cursive",fontWeight:"bold"}} >Login Form</h1>
          <p className="text-gray-300 mt-1" style={{fontFamily:"cursive",fontWeight:"bold"}}>
            Please fill up the form 
          </p>
        </div>
        <form>

          <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email"  value={email}   onChange={(e) => setEmail(e.target.value)} />
          <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className="flex justify-between mt-7">
            <input className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{cursor:"pointer",width:"6rem"}}  onClick={loginHandler} defaultValue="Login" />
            <input className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{cursor:"pointer"}} type="reset" />
          </div>
        </form>
      </div>
    </div>

    </div>
    
  </div>
    </div>
  )
}

export default Login

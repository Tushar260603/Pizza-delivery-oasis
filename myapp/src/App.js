
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';

import About from "./components/About";
import TopBar from "./components/TopBar";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import CartScreen from "./screens/CartScreen"
import Register from "./screens/Register";
import Login from "./screens/Login";
import Profile from "./components/Profile";
import Loader from "./components/Loader";
import Checkout from "./components/Checkout";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import AddNewPizza from "./components/Admin/AddNewPizza";
import AdminRoute from "./screens/AdminRoute";
import Admindashboard from "./screens/Admindashboard";
import Userlist from "./components/Admin/Userlist";
import orderList from "./components/Admin/OrderList";
import Pizzaslist from "./components/Admin/Pizzaslist"
import OrderList from "./components/Admin/OrderList";
import EditPizza from "./components/Admin/EditPizza";
function App() {
  return (

    <BrowserRouter>
    <TopBar />
   <Routes>
   <Route path="/admin" element={<AdminScreen />}   >
   <Route path="/admin/userlist" element={<Userlist />}   />
  
   <Route path="/admin/pizzaslist" element={<Pizzaslist />}   />
   <Route path="/admin/addnewpizza" element={<AddNewPizza />}   />


   <Route path="/admin/orderlist" element={<OrderList />}   />

</Route>
<Route  path="/admin/editpizza/:pizzaId"  element={<EditPizza />}      />


    
<Route path="/about" element={<About />}   />
<Route path="/orders" element={< OrderScreen/>}     />
<Route path="/loader" element={< Loader/>}   />
<Route path="/profile" element={<Profile />}   />
<Route path="/contact" element={<Contact />}   />
<Route path="/register" element={<Register />}   />
<Route path="/login" element={<Login/>}   />
<Route path="/policy" element={<Policy />}   />
<Route path="/" element={<HomeScreen />}   />
<Route path="/cart" element={<CartScreen />}   />
<Route path="/checkout" element={<Checkout />}   />
   </Routes>
    </BrowserRouter>
  );
}

export default App;

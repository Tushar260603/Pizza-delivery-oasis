import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Userlist from "../components/Admin/Userlist";
import Pizzaslist from "../components/Admin/Pizzaslist";
import AddNewPizza from "../components/Admin/AddNewPizza";
import EditPizza from "../components/Admin/EditPizza";
import OrderList from "../components/Admin/OrderList";


function AdminScreen() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  console.log(location.pathname)
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (

    <>
      <div className="flex">
        {/* Side Navigation Bar */}
        <Navbar />
        {/* Main component on basis of selected navigation from nav bar */}
        <main className="flex-grow ml-64">
        {location.pathname === "/admin" && <Userlist />}
        {location.pathname === "/admin/userlist" && <Userlist />}
        {location.pathname === "/admin/pizzaslist" && <Pizzaslist />}
        {location.pathname === "/admin/addnewpizza" && <AddNewPizza />}
        {location.pathname === "/admin/orderlist" && <OrderList />}
        </main>
      </div>
    </>
  );
}

export default AdminScreen;
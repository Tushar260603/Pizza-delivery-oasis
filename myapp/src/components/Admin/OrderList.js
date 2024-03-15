import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "./../../actions/orderAction";
import Loader from "./../Loader";
import Error from "./../Error";

const OrderList = () => {
  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrdersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div className="p-4"  style={{marginLeft:"100px",marginTop:"100px"}}>
      <h1 className="text-2xl font-bold mb-4">Order Lists</h1>
      {loading && <Loader />}
      {error && <Error error="Admin Order req fail" />}
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2" style={{fontFamily:"cursive",fontWeight:"bold"}}  >Order Id</th>
            <th className="border px-4 py-2" style={{fontFamily:"cursive",fontWeight:"bold"}}    >Name</th>
            <th className="border px-4 py-2" style={{fontFamily:"cursive",fontWeight:"bold"}}   >User ID</th>
            <th className="border px-4 py-2" style={{fontFamily:"cursive",fontWeight:"bold"}}   >Amount</th>
            <th className="border px-4 py-2" style={{fontFamily:"cursive",fontWeight:"bold"}}  >Date</th>
            <th className="border px-4 py-2" style={{fontFamily:"cursive",fontWeight:"bold"}}  >Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td className="border px-4 py-2"  style={{fontFamily:"cursive"}}  >{order._id}</td>
                <td className="border px-4 py-2" style={{fontFamily:"cursive"}} >{order.name}</td>
                <td className="border px-4 py-2" style={{fontFamily:"cursive"}} >{order.transectionId}</td>
                <td className="border px-4 py-2" style={{fontFamily:"cursive",fontSize:'0.9rem'}} >Rs {order.orderAmount}/-</td>
                <td className="border px-4 py-2" style={{fontFamily:"cursive",fontSize:'0.9rem'}} >{order.createdAt.substring(0, 10)}</td>
                <td className="border px-4 py-2" style={{fontFamily:"cursive"}} >
                  {order.isDeliverd ? (
                    <h6 className="text-green-500">Delivered</h6>
                  ) : (
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => {
                        dispatch(deliverOrder(order._id));
                      }}
                    >
                      Deliver
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;

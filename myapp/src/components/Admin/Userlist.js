import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import Loader from "./../Loader";
import Error from "./../Error";
import { deleteUser, getAllUsers } from "../../actions/userAction";

const Userlist = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="p-4" style={{marginLeft:"100px"}}>
      <h1 className="text-2xl font-bold mb-4 " style={{marginTop:'100px',marginLeft:'430px',fontFamily:"cursive",fontWeight:"bold"}}>User List</h1>
      {loading && <Loader />}
      {error && <Error error="Error While Fetching Users" />}
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2"  style={{fontFamily:'cursive'}}    >User ID</th>
            <th className="border px-4 py-2"  style={{fontFamily:'cursive'}} >Name</th>
            <th className="border px-4 py-2"   style={{fontFamily:'cursive'}} >Email</th>
            <th className="border px-4 py-2" style={{fontFamily:'cursive'}} >Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2" style={{fontFamily:'cursive'}} >{user._id}</td>
                <td className="border px-4 py-2" style={{fontFamily:'cursive'}} >{user.name}</td>
                <td className="border px-4 py-2"style={{fontFamily:'cursive'}}  >{user.email}</td>
                <td className="border px-4 py-2">
                  <AiFillDelete
                    className="text-red-500 cursor-pointer"
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;

import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu pann">
          <h4  style={{fontFamily:'cursive',marginTop:"10%",marginBottom:"10%"}} > Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/profile"
            className="list-group-item list-group-item-action"
            style={{fontFamily:'cursive'}}
          >
            Admin Profile
          </NavLink>

          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
            style={{fontFamily:'cursive'}}
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
            style={{fontFamily:'cursive'}}
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
            style={{fontFamily:'cursive'}}
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
            style={{fontFamily:'cursive'}}
          >
            Orders
          </NavLink>




        </div>
      </div>
    </>
  );
};

export default AdminMenu;
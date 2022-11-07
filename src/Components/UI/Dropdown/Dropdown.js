import React from "react";
import DropdownCSS from "./Dropdown.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Dropdown(props) {
  const styled = DropdownCSS;

  return (
    <ul
      className={`${styled.DropdownContainer} ${
        props.isNavbarDropdown ? styled.opened : styled.closed
      } ${props.className}`}
    >
      <li>
        <Link to="/changepassword">Change Password</Link>
      </li>
      <li>
        <Link to="/cart">Go to Cart</Link>
      </li>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
    </ul>
  );
}

export default Dropdown;

import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";
import { MdOutlineExpandMore } from "react-icons/md";
import Dropdown from "../Dropdown/Dropdown";
function Navbar() {
  const styled = NavbarCSS;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const pathName = useLocation();
  const isNavbarDropdown = useSelector((state) => state.ui.isNavbarDropdown);

  return (
    <div id="navbarContainer" className={styled.NavbarContainer}>
      <div className={styled.brand}>
        <img alt="logo" src="/assets/logo.svg" />
        <p>Grandma's</p>
      </div>
      <div className={styled.userActionButtons}>
        <div className={styled.link1}>
          <Link
            status={pathName.pathname === "/" ? "active" : ""}
            className={styled.link}
            to="/"
          >
            Home
          </Link>
        </div>
        <div className={styled.link2}>
          <Link
            status={pathName.pathname === "/menu" ? "active" : ""}
            className={styled.link}
            to="/menu"
          >
            Menu
          </Link>
        </div>
        {isLoggedIn && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              isNavbarDropdown
                ? dispatch(uiActions.navbarDropdownSwitch(false))
                : dispatch(uiActions.navbarDropdownSwitch(true));
            }}
            className={`${styled.DropdownHeader}`}
          >
            <div className={styled.DropdownHeader_inner}>
              <p>User</p>
              <MdOutlineExpandMore className={styled.expandIcon} />
            </div>
            {isNavbarDropdown && <Dropdown />}
          </div>
        )}
        {!isLoggedIn && (
          <>
            <div className={styled.link3}>
              <Link
                status={pathName.pathname === "/login" ? "active" : ""}
                className={styled.link}
                to="/login"
              >
                Log In
              </Link>
              {}
            </div>
            <div className={styled.link4}>
              <Link
                status={pathName.pathname === "/register" ? "active" : ""}
                className={styled.link}
                to="/register"
              >
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

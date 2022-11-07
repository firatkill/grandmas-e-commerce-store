import React from "react";
import MenuPageContainerCSS from "./MenuPageContainer.module.css";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
function MenuPageContainer() {
  const styled = MenuPageContainerCSS;
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div id="MenuPageContainer" className={styled.MenuPageContainer}>
      <div>
        <h2>MENU</h2>
        <hr />
      </div>
      <div className={styled.MenuComponents}>
        <Menu className={isLoggedIn && styled.maxWidth} />
        {isLoggedIn && <Cart />}
      </div>
    </div>
  );
}

export default MenuPageContainer;

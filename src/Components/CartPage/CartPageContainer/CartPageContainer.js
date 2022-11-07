import React, { useEffect, useState } from "react";
import CartPageContainerCSS from "./CartPageContainer.module.css";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { usePutRequest } from "../../../Hooks/CustomHooks";
import CartItem from "../CartItem/CartItem";
function CartPageContainer() {
  const styled = CartPageContainerCSS;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const putRequests = usePutRequest();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let totalPriceVar = 0;
    putRequests.updateCart();
    cartItems.forEach((elem) => {
      totalPriceVar += elem.price * elem.amount;
    });
    setTotalPrice(totalPriceVar);
    if (cartItems.length === 0) {
      navigate("/menu");
    }
  }, [navigate, cartItems.length, totalPrice, cartItems, putRequests]);

  return (
    <div className={styled.CartPageContainer}>
      <div className={styled.CartPageTitle}>
        <h3>CART</h3>
        <hr />
      </div>
      {cartItems.map((item) => (
        <CartItem item={item} key={cartItems.indexOf(item)} />
      ))}
      <hr />
      <div className={styled.cartBalance}>
        <p className={styled.rawPrice}>Price: ${totalPrice}</p>
        <p className={styled.taxAmount}>
          GST: ${(totalPrice * 2) / 100}(rate:2%)
        </p>
        <p className={styled.totalPrice}>
          Total Price: ${totalPrice + (totalPrice * 2) / 100}
        </p>
        <button className={styled.checkoutButton}>
          <Link to="/checkout">CHECKOUT</Link>
        </button>
      </div>
    </div>
  );
}

export default CartPageContainer;

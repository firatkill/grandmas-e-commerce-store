import React, { useEffect } from "react";
import CheckoutPageContainerCSS from "./CheckoutPageContainer.module.css";
import LocationBox from "../LocationBox/LocationBox";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../Redux/cart-slice";
import {
  usePlaceOrder,
  useGetUserInfosFromDb,
} from "../../../Hooks/CustomHooks";

import { Link, useNavigate } from "react-router-dom";
function CheckoutPageContainer() {
  const styled = CheckoutPageContainerCSS;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const getUserInfosFromDb = useGetUserInfosFromDb();
  const userId = useSelector((state) => state.user.userId);
  const placeOrder = usePlaceOrder();
  const placeOrders = () => {
    placeOrder();
    dispatch(cartActions.assignCartItems([]));
  };
  useEffect(() => {
    getUserInfosFromDb(userId);
  }, []);
  console.log(cartItems);
  if (cartItems.length === 0) {
    navigate("/");
  }
  return (
    <div className={styled.CheckoutPageContainer}>
      <div className={styled.header}>
        <h2>CHECKOUT</h2>
        <hr />
      </div>
      <div className={styled.locationBox}>
        <div className={styled.subTitle}>
          <h3>Location</h3>
          <hr />
        </div>
        <LocationBox />
      </div>
      <div className={styled.paymentBox}>
        <div className={styled.subTitle}>
          <h3>Payment</h3>
          <hr />
        </div>
        <div className={styled.payment}>
          <ul>
            <li>
              <input defaultChecked type="radio" />
              Cash on Delivery
            </li>
            <li>
              <input disabled type="radio" />
              Wallet
            </li>
            <li>
              <input disabled type="radio" />
              Credit / Debit Card
            </li>
            <li>
              <input disabled type="radio" />
              Net Banking
            </li>
          </ul>
        </div>
        <button onClick={placeOrders} className={styled.placeOrderButton}>
          <Link to="/orderPlaced">Place Order</Link>
        </button>
      </div>
    </div>
  );
}

export default CheckoutPageContainer;

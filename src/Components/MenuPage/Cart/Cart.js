import React, { useEffect } from "react";
import CartCSS from "./Cart.module.css";
import { scrollHandler } from "./CartFunctions";
import CartItem from "./CartItem/CartItem";
import { BsCart2 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../Redux/cart-slice";
import { Link } from "react-router-dom";
import { usePutRequest } from "../../../Hooks/CustomHooks";
function Cart() {
  const styled = CartCSS;
  const dispatch = useDispatch();
  const updateCart = usePutRequest();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoaded = useSelector((state) => state.menu.isMenuLoading);
  const calculator = () => {
    let totalAmount = 0;
    cartItems.forEach((elem) => {
      totalAmount += elem.price * elem.amount;
    });
    return totalAmount;
  };
  useEffect(() => {
    updateCart.updateCart();
  }, []);
  if (isLoaded) {
    return null;
  }

  scrollHandler();

  return (
    <div id="cartContainer" className={styled.CartContainer}>
      <div
        disable={cartItems.length === 0 ? "true" : "false"}
        id="cart"
        className={styled.cart}
      >
        <div className={styled.cartHeader}>
          <div className={styled.clearCart}>
            <h3>CART</h3>
            <button
              onClick={() => {
                dispatch(cartActions.clearCart());
              }}
              className={styled.clearButton}
            >
              CLEAR CART
            </button>
          </div>
        </div>
        <div className={styled.cartContent}>
          {cartItems.length === 0 ? (
            <div className={styled.emptyCart}>
              <BsCart2 className={styled.emptyCartIcon} />
              <p>Cart is Empty !</p>
            </div>
          ) : (
            <ul className={styled.cartContent__listGroup}>
              {cartItems.map((item) => {
                return <CartItem key={cartItems.indexOf(item)} item={item} />;
              })}
            </ul>
          )}
        </div>
        <div
          disable={cartItems.length === 0 ? "true" : "false"}
          className={styled.cartFooter}
        >
          <p className={styled.totalAmount}>TOTAL: ${calculator()}</p>
          <button className={styled.orderButton}>
            <Link to="/cart">GO TO CART</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

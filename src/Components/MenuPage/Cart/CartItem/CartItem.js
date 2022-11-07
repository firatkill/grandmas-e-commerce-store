import React from "react";
import CartItemCSS from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../Redux/cart-slice";
function CartItem(props) {
  const styled = CartItemCSS;

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (e.currentTarget.textContent === "-") {
      dispatch(cartActions.decreaseAmount(props.item.description));
    } else if (e.currentTarget.textContent === "+") {
      dispatch(cartActions.increaseAmount(props.item.description));
    }
  };
  return (
    <li className={styled.CartItemContainer}>
      <div className={styled.upperDiv}>
        <p className={styled.itemName}>{props.item.name}</p>
        <p className={styled.itemDescription}>{props.item.description}</p>
      </div>
      <div className={styled.bottomDiv}>
        <p className={styled.itemPrice}>
          Price: <strong>${props.item.price}</strong>
        </p>
        <div className={styled.amountButtons}>
          <span onClick={clickHandler} className={styled.minusButton}>
            -
          </span>
          <span className={styled.amount}>{props.item.amount}</span>
          <span onClick={clickHandler} className={styled.plusButton}>
            +
          </span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

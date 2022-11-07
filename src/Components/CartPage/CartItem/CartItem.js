import React from "react";
import CartItemCSS from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Redux/cart-slice";
function CartItem(props) {
  const styled = CartItemCSS;
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    if (e.currentTarget.textContent === "-") {
      console.log("naber");
      dispatch(cartActions.decreaseAmount(props.item.description));
    } else if (e.currentTarget.textContent === "+") {
      dispatch(cartActions.increaseAmount(props.item.description));
    }
  };
  return (
    <div className={styled.CartItemContainer}>
      <div className={styled.firstCol}>
        <div className={styled.itemImg}>
          <img alt="orderImg" src={props.item.img} />
        </div>
        <div className={styled.itemInfo}>
          <p className={styled.itemName}>{props.item.name}</p>
          <p className={styled.itemDescription}>{props.item.description}</p>
          <p className={styled.itemPrice}>
            Price: <strong>${props.item.price}</strong>
          </p>
        </div>
      </div>
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
  );
}

export default CartItem;

import React, { useState } from "react";
import MenuItemCardCSS from "./MenuItemCard.module.css";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";
import { cartActions } from "../../../Redux/cart-slice";
function MenuItemCard(props) {
  const styled = MenuItemCardCSS;
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart(props.item));
    setChecked(true);
    setTimeout(() => {
      setChecked(false);
    }, 700);
  };

  const showModal = (e) => {
    dispatch(uiActions.itemModalSwitch(e.currentTarget.src));
  };
  return (
    <div className={styled.MenuItemCardContainer}>
      <div className={styled.cardImgContainer}>
        <img
          onClick={showModal}
          className={styled.cardImg}
          alt="sweety"
          src={props.item.img}
        />
      </div>
      {checked && <BsCheckLg className={styled.checkIcon} />}
      <div className={styled.cardBody}>
        <h4 className={styled.cardTitle}>{props.item.name}</h4>
        <p className={styled.cardText}>{props.item.description}</p>
      </div>
      <div className={styled.cardFooter}>
        <p className={styled.cardText__price}>${props.item.price}</p>
        <button onClick={addToCart} className={styled.cardButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;

import React from "react";
import MenuItemModalCSS from "./MenuItemModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";
function MenuItemModal() {
  const styled = MenuItemModalCSS;
  const dispatch = useDispatch();

  const modalImg = useSelector((state) => state.ui.modalImg);
  const closeModal = () => {
    dispatch(uiActions.itemModalSwitch());
  };

  return (
    <div className={styled.modal} onClick={closeModal}>
      <div
        className={styled.modal_content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img alt="sweety" src={modalImg} />
      </div>
    </div>
  );
}

export default MenuItemModal;

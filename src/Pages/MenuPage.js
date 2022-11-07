import React from "react";
import MenuPageContainer from "../Components/MenuPage/MenuPageContainer/MenuPageContainer";
import MenuItemModal from "../Components/MenuPage/MenuItemModal/MenuItemModal";
import { useSelector } from "react-redux";
function MenuPage() {
  const isItemModal = useSelector((state) => state.ui.isItemModal);
  return (
    <>
      <MenuPageContainer />
      {isItemModal && <MenuItemModal />}
    </>
  );
}

export default MenuPage;

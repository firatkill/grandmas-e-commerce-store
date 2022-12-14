import React, { useEffect } from "react";
import MenuCSS from "./Menu.module.css";
import MenuItemCard from "../MenuItemCard/MenuItemCard";
import { useFetchMenu } from "../../../Hooks/CustomHooks";
import Spinner from "../../UI/Spinner/Spinner";
import { useSelector } from "react-redux";

function Menu(props) {
  const styled = MenuCSS;
  const fetchMenu = useFetchMenu();

  useEffect(() => {
    fetchMenu("https://grandma-s-default-rtdb.firebaseio.com/Menu.json");
  }, []);
  const loading = useSelector((state) => state.menu.isMenuLoading);
  const data = useSelector((state) => state.menu.menuItems);

  return (
    <div
      id="menuContainer"
      className={`${styled.MenuContainer} ${props.className}`}
    >
      {loading && <Spinner className={styled.Spinner} />}
      {!loading && (
        <>
          {data.map((item) => {
            return <MenuItemCard key={data.indexOf(item)} item={item} />;
          })}
        </>
      )}
    </div>
  );
}

export default Menu;

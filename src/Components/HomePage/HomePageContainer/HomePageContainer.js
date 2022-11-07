import React from "react";
import { Link } from "react-router-dom";
import HomePageContainerCSS from "./HomePageContainer.module.css";
function HomePageContainer() {
  const styled = HomePageContainerCSS;
  return (
    <div className={styled.HomePageContainer}>
      <img
        className={styled.backgroundImg}
        alt=""
        src="/assets/headerBcg.jpeg"
      />
      <div>
        <div className={styled.brand}>
          <div className={styled.brandLogo}>
            {" "}
            <img alt="logo" src="/assets/logo.svg" />
            <h1>Grandma's Online Store</h1>
          </div>
          <p className={styled.subtitle}>For delicious sweeties!</p>
          <Link to="/menu" className={styled.link}>
            <p>Order Now !</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePageContainer;

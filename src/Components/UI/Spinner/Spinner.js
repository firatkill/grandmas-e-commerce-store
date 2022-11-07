import React from "react";
import SpinnerCSS from "./Spinner.module.css";
function Spinner(props) {
  const styled = SpinnerCSS;
  return (
    <div className={`${styled.SpinnerContainer} ${props.className}`}>
      <div className={styled.Spinner}></div>
    </div>
  );
}

export default Spinner;

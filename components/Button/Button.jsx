//import React from "react";
import Style from './Button.module.css';

const Button = ({btnName, handleClick, classStyles}) => (
  <button className={Style.button} type="button" onClick={handleClick}>{btnName}</button>
  //return <div>Button</div>;
);

export default Button;

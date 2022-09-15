import React from "react";
import style from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.inputs}>
        <input type="search"></input>
        <button type="button">Search</button>
      </div>
    </div>
  );
};

export default Header;

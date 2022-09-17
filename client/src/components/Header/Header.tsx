import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerBlackWrapper}>
        <div className={styles.headerBlack}>
          <div>PB Tech</div>
          <div>Hardwired</div>
          <div>PB Business</div>
          <div>PB Education</div>
          <div>PB Wholesale</div>
          <div>PB Government</div>
          <div>PB Health</div>
          <div>PB IoT</div>
        </div>
      </div>
      <div className={styles.headerBlueWrapper}>
        
      </div>
      {/* <div className={styles.inputs}>
        <input type="search"></input>
        <button type="button">Search</button>
      </div> */}
    </div>
  );
};

export default Header;

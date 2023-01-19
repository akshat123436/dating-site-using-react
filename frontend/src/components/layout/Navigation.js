import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { FaBars } from "react-icons/fa";
function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = () => {
    setIsVisible((previousState) => {
      return !previousState;
    });
  };
  return (
    <nav className={`${isVisible ? styles.visible : ""}`}>
      <ul className={`${styles.nav} ${isVisible ? styles.visible : ""}`}>
        <li className={styles["nav-item"]}>People Reviews</li>
        <li className={styles["nav-item"]}>About Us</li>
        <li className={styles["nav-item"]}>Terms & Conditions</li>
        <li className={styles["nav-item"]}>Login</li>
        <li className={styles["nav-item"]}>Register</li>
      </ul>
      <FaBars
        className={`${styles.bars} ${isVisible ? styles.rotate : ""}`}
        onClick={clickHandler}
      />
    </nav>
  );
}

export default Navigation;

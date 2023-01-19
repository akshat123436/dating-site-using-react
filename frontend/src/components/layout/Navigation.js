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
        <li className={styles["nav-item"]}>
          <a href="#reviews-container"> People Reviews</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="#about-container">About Us</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="#terms-container">Terms & Conditions</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="#login-container">Login</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="#register-container">Register</a>
        </li>
      </ul>
      <FaBars
        className={`${styles.bars} ${isVisible ? styles.rotate : ""}`}
        onClick={clickHandler}
      />
    </nav>
  );
}

export default Navigation;

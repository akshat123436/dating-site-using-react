import React from "react";
import styles from "./Container.module.css";
function Container(props) {
  const classes = `${styles.container} ${props.className}`;
  return (
    <div id={props.id} className={classes}>
      {props.children}
    </div>
  );
}

export default Container;

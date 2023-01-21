import React from "react";
import styles from "./Form.module.css";
function Form(props) {
  return <form className={styles.form}>{props.children}</form>;
}

export default Form;

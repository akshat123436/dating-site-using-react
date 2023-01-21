import React, { useRef } from "react";
import Form from "../UI/Form.js";
import styles from "../UI/Form.module.css";
import axios from "axios";
function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginHandler = async (e) => {
    e.preventDefault();
    // console.log(emailRef);
    // console
    const userData = await axios.post("http://localhost:4000/user/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log(userData);
  };
  return (
    <Form>
      <label className={styles.formLabel} htmlFor="email">
        Email :{" "}
      </label>
      <input
        ref={emailRef}
        className={styles.formInput}
        id="email"
        type="text"
      />
      <br />
      <label className={styles.formLabel} htmlFor="password">
        Password :{" "}
      </label>
      <input
        ref={passwordRef}
        className={styles.formInput}
        id="password"
        type="text"
      />
      <br />
      <button onClick={loginHandler}>LOGIN</button>
    </Form>
  );
}

export default LoginForm;

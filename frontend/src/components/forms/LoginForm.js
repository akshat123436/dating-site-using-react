import React, { useRef, Fragment } from "react";
import Form from "../UI/Form.js";
import styles from "../UI/Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginStateActions } from "../../store/loginSlice.js";
import axios from "axios";
function LoginForm() {
  const login = useSelector((state) => state.loginState.login);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginHandler = async (e) => {
    e.preventDefault();
    // console.log(login);
    // console
    try {
      const userData = await axios.post("http://localhost:4000/user/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        withCredentials: true,
      });
      console.log(userData);
      dispatch(loginStateActions.login());
    } catch (e) {
      console.log(e.response.data.message);
    }
  };
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default LoginForm;

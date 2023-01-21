import React, { useState } from "react";
import Container from "../UI/Container";
import LoginForm from "../forms/LoginForm.js";
import RegisterForm from "../forms/RegisterForm.js";
import styles from "./LoginRegister.module.css";
function LoginRegister() {
  const [loginVisible, setLoginVisible] = useState(false);
  const loginHandler = () => {
    setLoginVisible(true);
  };
  const registerHandler = () => {
    setLoginVisible(false);
  };
  return (
    <Container>
      <div className={styles.signBox}>
        <div className={styles.signButton}>
          <button
            onClick={loginHandler}
            className={loginVisible ? `${styles.buttonBackground}` : ""}
          >
            Login
          </button>
          <button
            onClick={registerHandler}
            className={!loginVisible ? `${styles.buttonBackground}` : ""}
          >
            Register
          </button>
        </div>
        {loginVisible ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}
      </div>
    </Container>
  );
}

export default LoginRegister;

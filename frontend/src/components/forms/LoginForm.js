import React from "react";
import Form from "../UI/Form.js";
function LoginForm() {
  return (
    <Form>
      <label for="email">Email : </label>
      <input id="email" type="text" />
      <br />
      <label for="password">Password : </label>
      <input id="password" type="text" />
      <br />
      <button>submit</button>
    </Form>
  );
}

export default LoginForm;

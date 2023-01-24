import { configureStore } from "@reduxjs/toolkit";

import loginSliceReducer from "./loginSlice";

const store = configureStore({
  reducer: { loginState: loginSliceReducer },
});

export default store;

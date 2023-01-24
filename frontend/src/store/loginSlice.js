import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginState",
  initialState: { login: false, logout: false },
  reducers: {
    login(state) {
      state.login = true;
      state.logout = false;
    },
    logout(state) {
      state.login = false;
      state.logout = true;
    },
  },
});
export const loginStateActions = loginSlice.actions;
export default loginSlice.reducer;

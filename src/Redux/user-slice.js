import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isRegistering: false,
    isSigningIn: false,
    isChangingPassword: false,
    isLoggedIn: false,
    userId: "",
    userAddress: "",
    userOrders: [],
  },
  reducers: {
    registeringSwitch(state, action) {
      state.isRegistering = action.payload;
    },
    signingInSwitch(state, action) {
      state.isSigningIn = action.payload;
    },
    assignUserId(state, action) {
      state.userId = action.payload;
    },
    switchLoginState(state, action) {
      state.isLoggedIn = action.payload;
    },
    changingPasswordSwitch(state, action) {
      state.isChangingPassword = action.payload;
    },
    assignUserAddress(state, action) {
      state.userAddress = action.payload;
    },
    assignUserOrders(state, action) {
      if (action.payload === undefined) {
        state.userOrders = [];
      } else {
        state.userOrders = action.payload;
      }
    },
  },
});
export default userSlice;

export const userActions = userSlice.actions;

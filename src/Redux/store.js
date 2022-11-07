import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import menuSlice from "./menu-slice";
import userSlice from "./user-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart(state, action) {
      let item = state.cartItems.find(
        (item) => item.description === action.payload.description
      );
      if (item !== undefined) {
        item.amount += 1;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
    },
    assignCartItems(state, action) {
      if (action.payload !== undefined) {
        state.cartItems = action.payload;
      }
    },
    decreaseAmount(state, action) {
      let item = state.cartItems.find(
        (item) => item.description === action.payload
      );
      if (item.amount === 1) {
        state.cartItems.splice(state.cartItems.indexOf(item), 1);
      } else {
        item.amount -= 1;
      }
    },
    increaseAmount(state, action) {
      let item = state.cartItems.find(
        (item) => item.description === action.payload
      );
      item.amount += 1;
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});
export default cartSlice;

export const cartActions = cartSlice.actions;

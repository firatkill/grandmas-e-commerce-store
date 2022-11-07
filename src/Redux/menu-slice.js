import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { menuItems: [], isMenuLoading: true, error: "" },
  reducers: {
    loadingSwitch(state, action) {
      state.isMenuLoading = action.payload;
    },
    assignMenuItems(state, action) {
      state.menuItems = action.payload;
    },
    assignError(state, action) {
      state.error = action.payload;
    },
  },
});
export default menuSlice;

export const menuActions = menuSlice.actions;

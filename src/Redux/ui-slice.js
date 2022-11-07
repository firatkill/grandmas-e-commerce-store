import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isItemModal: false, modalImg: "", isNavbarDropdown: false },
  reducers: {
    itemModalSwitch(state, action) {
      state.isItemModal = !state.isItemModal;
      state.modalImg = action.payload;
    },
    navbarDropdownSwitch(state, action) {
      state.isNavbarDropdown = action.payload;
    },
  },
});

export default uiSlice;

export const uiActions = uiSlice.actions;

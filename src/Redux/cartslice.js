import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  carTotal: 0
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {}
  }
});

export const { addToCart } = CartSlice.actions;
export const CartReducer = CartSlice.reducer;

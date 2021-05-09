import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, { payload = {} }) => {
      state.products = payload;
    }
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

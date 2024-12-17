import { createSlice } from "@reduxjs/toolkit";

const infoProducts = createSlice({
  name: "info",
  initialState: {
    count: 0,
    categoryName: "",
    gender: "",
    filter: {
      color: [],
      size: [],
    },
  },
  reducers: {
    countInShoppingCart(state, action) {
      // console.log(action.payload.)
      state.count = action.payload.count;
    },
    saveInfoProduct(state, action) {
      state.categoryName = action.payload.categoryName;
      state.gender = action.payload.gender;
    },
    handleFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const { countInShoppingCart, saveInfoProduct, handleFilter } =
  infoProducts.actions;
export default infoProducts.reducer;

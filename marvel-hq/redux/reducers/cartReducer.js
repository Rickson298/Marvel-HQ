import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "ShoppingCart",
  initialState: {
    items: [],
  },
  reducers: {
    setShoppingCart: (state, action) => {
      state.items = action.payload;
    },
    setUpdateCart: (state, action) => {
      state.items[action.payload.index].quantity = action.payload.quantity;
      state.items[action.payload.index].price = action.payload.price * state.items[action.payload.index].quantity ;
    },
  },
});

export const { setShoppingCart, setUpdateCart } = slice.actions;
export default slice.reducer;

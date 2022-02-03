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
      state.items[action.payload.index].price =
        action.payload.price * state.items[action.payload.index].quantity;
    },
    setRemoveCartItem: (state, action) => {
      state.items = state.items.filter(
        (element) => element.id !== action.payload.id
      );
    },
  },
});

export const { setShoppingCart, setUpdateCart, setRemoveCartItem } =
  slice.actions;
export default slice.reducer;

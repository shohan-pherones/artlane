import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exitingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (exitingItem) {
        exitingItem.quantity += action.payload.quantity;
        toast.success("Product quantity increased.");
      } else {
        state.items.push(action.payload);
        toast.success("Product added into cart.");
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      toast.success("product removed from cart.");
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

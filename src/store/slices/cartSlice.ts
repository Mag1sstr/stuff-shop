import { createSlice } from "@reduxjs/toolkit";
import type { ICart } from "../../types/interfaces";

interface CartState {
  cart: ICart[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem(state, action) {
      for (const el of state.cart) {
        if (el.id === action.payload.id) {
          return;
        }
      }
      state.cart.push(action.payload);
    },
    deleteCartItem(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    },
    increaseCartItem(state, action) {
      state.cart = state.cart.map((el) => {
        if (el.id === action.payload) {
          return { ...el, count: el.count + 1 };
        }
        return el;
      });
    },
    decreaseCartItem(state, action) {
      state.cart = state.cart.map((el) => {
        if (el.id === action.payload && el.count > 1) {
          return { ...el, count: el.count - 1 };
        }
        return el;
      });
    },
  },
});

export const {
  addCartItem,
  deleteCartItem,
  increaseCartItem,
  decreaseCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;

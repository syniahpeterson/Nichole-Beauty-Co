import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");

let parsedCart = [];

try {
  parsedCart = savedCart ? JSON.parse(savedCart) : [];
} catch {
  parsedCart = [];
}

const initialState = {
  items: parsedCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) item.quantity += 1;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

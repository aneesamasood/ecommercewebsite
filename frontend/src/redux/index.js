import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSliceReducer from "./productSlice"; // Ensure the correct import

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable DevTools in non-production environments
});
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import categorySlice from "./category.slice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    auth: authSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "./favouriteSlice";

const store = configureStore({
  reducer: favoriteSlice.reducer,
});

export default store;

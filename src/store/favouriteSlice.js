import { createSlice } from "@reduxjs/toolkit";
import SPOTS from "../utils/spots";

const initialState = { favorites: [SPOTS[8], SPOTS[1], SPOTS[2], SPOTS[11]] };
export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      console.log(action.payload);
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      console.log(action.payload);
      state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;

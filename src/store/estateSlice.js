import { createSlice } from "@reduxjs/toolkit";
const EstateSlice = createSlice({
  name: "estate",
  initialState: { estates: [] },
  reducers: {
    setEstates(state, action) {
      state.estates = action.payload;
    },
    sortEstate(state, action) {
      switch (action.payload) {
        case "latest":
          state.estates.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          break;
        case "oldest":
          state.estates.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
          break;
        case "htl":
          state.estates.sort((a, b) => b.price - a.price);
          break;
        case "lth":
          state.estates.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
    },
  },
});

export default EstateSlice;

export const estateAction = EstateSlice.actions;

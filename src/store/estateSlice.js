import { createSlice } from "@reduxjs/toolkit";
const EstateSlice = createSlice({
  name: "estate",
  initialState: { estates: [] },
  reducers: {
    setEstates(state, action) {
      state.estates = action.payload;
    },
  },
});

export default EstateSlice;

export const estateAction = EstateSlice.actions;

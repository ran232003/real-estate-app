import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "cart",
  initialState: { user: null, estates: [] },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
    setEstates(state, action) {
      state.estates = action.payload;
    },
  },
});

export default AuthSlice;

export const authAction = AuthSlice.actions;

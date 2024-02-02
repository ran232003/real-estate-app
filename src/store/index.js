import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import LoadingSlice from "./loadingSlice";
import ToastSlice from "./toastSlice";
import EstateSlice from "./estateSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    loading: LoadingSlice.reducer,
    toast: ToastSlice.reducer,
    estate: EstateSlice.reducer,
  },
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import { symbolSlice } from "./accion/symbolSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    simbolo: symbolSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

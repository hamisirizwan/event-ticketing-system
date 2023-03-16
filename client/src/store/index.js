import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import ticketReducer from "./slices/ticketSlice";
export const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    Auth: authReducer,
  },
});

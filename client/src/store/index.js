import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./slices/ticketSlice";
export const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});

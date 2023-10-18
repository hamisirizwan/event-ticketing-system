import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ToastContainer } from "react-toastify";

// axios.defaults.baseURL = "http://localhost:1234/api/";
axios.defaults.baseURL = "https://tiketi-api.vercel.app/api/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer autoClose={3000} />
    </Provider>
  </React.StrictMode>
);

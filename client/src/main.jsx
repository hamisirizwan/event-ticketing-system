import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/index";

// axios.defaults.baseURL = "http://localhost:1234/api/";
axios.defaults.baseURL = "https://tiketi.devriz.xyz/api/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

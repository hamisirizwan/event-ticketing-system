import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1234/api/";
axios.defaults.baseURL = "https://tiketi.devriz.xyz/api/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

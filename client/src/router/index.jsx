import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Protected from "../pages/auth/Protected";
import SignIn from "../pages/auth/SignIn";
import Error404 from "../pages/Error404";
import LandingPage from "../pages/LandingPage";
import BookEvent from "../pages/main/BookEvent";
import Dashboard from "../pages/main/Dashboard";
import Events from "../pages/main/Events";
import Tickets from "../pages/main/Tickets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/book/:id",
    element: <BookEvent />,
  },
  {
    element: <Protected />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);

export default router;

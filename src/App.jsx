import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import LoginLayout from "./components/LoginLayout";
import LoginLayoutTwo from "./components/LoginLayoutTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Body />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <LoginLayout />
          </>
        ),
      },
      {
        path: "/login-step-two",
        element: (
          <>
            <LoginLayoutTwo />
          </>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Dashboard />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/aboutme",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

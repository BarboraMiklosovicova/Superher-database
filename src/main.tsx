import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Error } from "./pages/Error/Error";
import {
  SuperheroList,
  superheroLoader,
} from "./pages/SuperheroList/SuperheroList";
import { SuperHeroView } from "./pages/SuperHeroView/SuperHeroView";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/superheroes",
    element: <SuperheroList></SuperheroList>,
  },
  {
    path: "/superheroes/:id",
    element: <SuperHeroView></SuperHeroView>,
    loader: superheroLoader,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

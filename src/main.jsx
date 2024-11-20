import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import SignUp from "./Components/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieComponent from "./Components/MovieComponent.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import Cart from "./Components/Cart.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { LoginProvider } from "./Context/LoginContext.jsx";
import Home from "./Components/Home.jsx";
import CartElements from "./Components/CartElements.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/movies/:slug",
    element: <MovieComponent />,
  },
  {
    path: "/cart",
    element: <CartElements />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </LoginProvider>
  </StrictMode>
);

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
import { Blog } from "./pages/Blog/Blog";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { Error } from "./pages/Error/Error";
import { Product } from "./pages/Product/Product";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Layout } from "./layout/Layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "*",
          element: <Error />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import { getAllProducts } from "./api/product";
import Checkout from "./pages/Checkout";

const routes = [
  {
    path: "/",
    element: <Home />,
    loader: getAllProducts,
  },
  {
    path: "/products",
    element: <Products />,
    loader: getAllProducts,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]

export default routes

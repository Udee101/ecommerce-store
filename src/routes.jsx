import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
} from "react-router-dom";
import Layout from "./components/container/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import { getAllProducts } from "./api/product";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} loader={getAllProducts} />
      <Route path="/products" element={<Products />} loader={getAllProducts} />
      <Route path="/products/:id" element={<Product />} />
    </Route>
  )
);

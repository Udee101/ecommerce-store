import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
} from "react-router-dom";
import Layout from "./components/container/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
    </Route>
  )
);

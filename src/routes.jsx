import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/container/Layout";
import Home from "./pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

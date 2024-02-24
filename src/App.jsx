import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
} from "react-router-dom";
import Layout from "./components/container/Layout";
import NotFound from "./pages/NotFound";
import routes from "./routes";


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NotFound />}></Route>
      <Route element={<Layout />}>
        {
          routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} loader={route.loader} />
          ))
        }
      </Route>
    </>
  )
);

export default App

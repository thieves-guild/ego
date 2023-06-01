import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/root";
import Home from "./pages/home";

const App = () => {
  const router = createBrowserRouter(createRoutesFromChildren(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
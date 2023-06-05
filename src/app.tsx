import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/root";
import Home from "./pages/home";
import Elements from "./pages/elements";

const App = () => {
  const router = createBrowserRouter(createRoutesFromChildren(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/elements" element={<Elements />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
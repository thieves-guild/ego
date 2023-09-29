import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/root";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  const router = createBrowserRouter(createRoutesFromChildren(
    <Route path="/" element={<Root />}>
    </Route>
  ))

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  )
}

export default App;
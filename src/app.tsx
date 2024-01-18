import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/root";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import Dashboard from "./pages/dashboard";
import Elements from "./pages/elements";
import Streak from "./pages/streak";
import { useAuth } from "@clerk/clerk-react";
import SignInPage from "./pages/sign-in";
import Error from "./pages/error";
import SignUpPage from "./pages/sign-up";

const App = () => {
  const { isSignedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromChildren(
      isSignedIn ? (
        <Route path={"/"} element={<Root />}>
          <Route index element={<Dashboard />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/streak" element={<Streak />} />
          <Route path="*" element={<Error />} />
        </Route>
      ) : (
        <Route path={"/"}>
          <Route index element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
      )
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

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
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import SignInPage from "./pages/signIn";

const App = () => {
  if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route
          path="/"
          element={
            <SignedIn>
              <Root />
            </SignedIn>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/streak" element={<Streak />} />
        </Route>
        <Route
          path="/sign-in"
          element={
            <SignedOut>
              <SignInPage />
            </SignedOut>
          }
        />
      </>
    )
  );

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default App;

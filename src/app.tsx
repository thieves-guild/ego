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
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
} from "@clerk/clerk-react";
import Home from "./pages/home";
import SignInPage from "./pages/signIn";

const App = () => {
  if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Root />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn redirectUrl="/sign-in" />
              </SignedOut>
            </>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/streak" element={<Streak />} />
        </Route>
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

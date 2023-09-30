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
import Home from "./pages/home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Root />}>
        <Route path="/home" element={<Home />} />
        <Route
          index
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />
        <Route path="/elements" element={<Elements />} />
        <Route path="/streak" element={<Streak />} />
      </Route>
    )
  );

  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default App;

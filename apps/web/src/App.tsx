import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// 2. The main App component exports your global providers
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

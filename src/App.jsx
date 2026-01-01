import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

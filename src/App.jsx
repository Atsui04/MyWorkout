import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Archive from "./pages/Archive";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Schedule />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;

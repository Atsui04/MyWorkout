import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Archive from "./pages/Archive";
import Profile from "./pages/Profile";
import Plan from "./pages/Plan/Plan";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Schedule />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

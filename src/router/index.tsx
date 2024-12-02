import { createBrowserRouter } from "react-router-dom";

import { paths } from "@/constants/paths";
import HomePage from "@/pages/home";
import RootLayout from "@/components/shared/RootLayout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: paths.HOME,
        element: <HomePage />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";

import { paths } from "@/constants/paths";
import HomePage from "@/pages/home";
import RootLayout from "@/components/shared/RootLayout";
import { RentListPage } from "@/pages/list";
import RentDetailPage from "@/pages/detail";
import PaymentPage from "@/pages/payment";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: paths.HOME,
        element: <HomePage />,
      },
      {
        path: paths.LIST,
        element: <RentListPage />,
      },
      {
        path: paths.DETAIL(),
        element: <RentDetailPage />,
      },
      {
        path: paths.PAYMENT,
        element: <PaymentPage />,
      },
    ],
  },
]);

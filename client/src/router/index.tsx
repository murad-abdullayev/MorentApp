import { createBrowserRouter } from "react-router-dom";

import { paths } from "@/constants/paths";
import HomePage from "@/pages/(business)/home";
import RootLayout from "@/components/shared/RootLayout";
import { RentListPage } from "@/pages/(business)/list";
import PaymentPage from "@/pages/(business)/payment";
import RentDetailPage from "@/pages/(business)/detail";
import DashboardMainPage from "@/pages/(dashboard)/main";
import DashboardRentListPage from "@/pages/(dashboard)/rent/list";
import DashboardRentCreatePage from "@/pages/(dashboard)/rent/create";
import DashboardRentEditPage from "@/pages/(dashboard)/rent/edit";
import DashboardLayout from "@/components/shared/DashboardLayout";

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
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          {
            path: paths.DASHBOARD.MAIN,
            element: <DashboardMainPage />,
          },
          {
            path: paths.DASHBOARD.RENTS.LIST,
            element: <DashboardRentListPage />,
          },
          {
            path: paths.DASHBOARD.RENTS.CREATE,
            element: <DashboardRentCreatePage />,
          },
          {
            path: paths.DASHBOARD.RENTS.EDIT(),
            element: <DashboardRentEditPage />,
          },
        ],
      },
    ],
  },
]);

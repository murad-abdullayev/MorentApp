import { useEffect } from "react";
import { Dialogs } from "./dialogs";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux";
import { getCurrentUserAsync } from "@/store/features/userSlice";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUserAsync());
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Dialogs />
      <Footer />
    </div>
  );
};

export default RootLayout;

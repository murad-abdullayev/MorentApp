import { Dialogs } from "./dialogs";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
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

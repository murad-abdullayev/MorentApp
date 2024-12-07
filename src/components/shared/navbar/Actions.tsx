import HeartIcon from "@/assets/icons/heart.svg";
import NotificationIcon from "@/assets/icons/notification.svg";
import SettingsIcon from "@/assets/icons/settings.svg";
import { Button } from "@/components/ui/button";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";

import { Link } from "react-router-dom";

export const NavbarActions = () => {
  const { openDialog } = useDialog();
  return (
    <div className="flex gap-3 lg:gap-5">
      <Link
        to={"/"}
        className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-[9px]"
      >
        <img src={HeartIcon} alt="Favorites Icon" />
      </Link>
      <Link
        to={"/"}
        className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-[9px]"
      >
        <img src={NotificationIcon} alt="Notification Icon" />
      </Link>
      <Link
        to={"/"}
        className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-[9px]"
      >
        <img src={SettingsIcon} alt="Settings Icon" />
      </Link>
      {/* <Link
        to={"/"}
        className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-[9px]"
      >
        <User2Icon color="#596780" />
      </Link> */}
      <Button onClick={() => openDialog(ModalTypeEnum.LOGIN)}>Sign In</Button>
    </div>
  );
};

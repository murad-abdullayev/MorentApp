import HeartIcon from "@/assets/icons/heart.svg";
import NotificationIcon from "@/assets/icons/notification.svg";
import SettingsIcon from "@/assets/icons/settings.svg";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { logoutAsync, selectUserData } from "@/store/features/userSlice";
import { LogOutIcon, User2Icon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link } from "react-router-dom";
import { UserRole } from "@/types";
import { paths } from "@/constants/paths";
import { toast } from "sonner";

export const NavbarActions = () => {
  const { openDialog } = useDialog();
  const { user } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutAsync());
    toast.success("Logout successful");
  };

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
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-[9px]">
              <User2Icon color="#596780" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user.role === UserRole.Admin && (
              <DropdownMenuItem>
                <Link to={paths.DASHBOARD.MAIN}>Dashboard</Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>
              <Link to={"/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/reservations"}>Reservations</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              <LogOutIcon />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button onClick={() => openDialog(ModalTypeEnum.LOGIN)}>Sign In</Button>
      )}
    </div>
  );
};

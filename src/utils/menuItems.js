import { IoHome, IoPersonSharp } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
import { IoIosRocket, IoMdStats } from "react-icons/io";
import { BsCreditCardFill } from "react-icons/bs";
import { HiDocument } from "react-icons/hi"

let lastId = 0;
const getMenuId = () => ++lastId;

export const DASHBOARD_MENU = {
  title: "",
  items: [
    {
      id: getMenuId(),
      label: "Dashboard",
      icon: IoHome,
      path: "/pages/dashboard"
    },
    {
      id: getMenuId(),
      label: "Tables",
      icon: IoMdStats,
      path: "/pages/tables"
    },
    {
      id: getMenuId(),
      label: "Billing",
      icon: BsCreditCardFill,
      path: "/pages/billing"
    },
    {
      id: getMenuId(),
      label: "RTL",
      icon: FaWrench,
      path: "/pages/rtl"
    }
  ]
}

export const PROFILE_MENU = {
  title: "Account pages",
  items: [
    {
      id: getMenuId(),
      label: "Profile",
      icon: IoPersonSharp,
      path: "/"
    },
    {
      id: getMenuId(),
      label: "Sign In",
      icon: HiDocument,
      path: "/login"
    },
    {
      id: getMenuId(),
      label: "Sign Up",
      icon: IoIosRocket,
      path: "/register"
    },
  ]
}
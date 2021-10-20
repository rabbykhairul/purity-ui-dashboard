import React from "react";
import { useLocation } from "react-router";
import LeftSideBar from "./commons/LeftSideBar";
import TopBar from "./commons/TopBar";

const MainPage = () => {
  const location = useLocation();

  const renderContents = () => {
    if (location.pathname.includes("dashboard") || location.pathname === "/pages") return <p>Hello from dashboard!</p>;
    else if (location.pathname.includes("tables")) return <p>Hello from tables!!</p>;

    return null;
  }

  return (
    <div className="page-container main-page bg-gray-light">
      <TopBar />
      <LeftSideBar />
      {renderContents()}
    </div>
  )
};

export default MainPage;
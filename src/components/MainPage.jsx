import React from "react";
import LeftSideBar from "./commons/LeftSideBar";
import TopBar from "./commons/TopBar";

const MainPage = () => {

  return (
    <div className="page-container main-page bg-gray-light">
      <TopBar />
      <LeftSideBar />
    </div>
  )
};

export default MainPage;
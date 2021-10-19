import React from "react";
import { IoNotificationsSharp, IoSettingsSharp, IoPersonSharp } from "react-icons/io5";
import Button from "./Button";
import SearchBar from "./SearchBar";

const TITLE = "PURITY UI DASHBOARD";

const TopBar = () => {

  const renderDashboardTitle = () => {
    return (
      <div className="title-container color-gray-700">
        <div className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/logo-purity-ui-black.png`} alt="" />
        </div>
        <h1>{TITLE}</h1>
      </div>
    )
  }

  const renderPageTitle = () => {
    return (
      <div className="page-title">
        <p className="color-gray-400">Pages / <span className="color-gray-700">Tables</span></p>
        <h2 className="color-gray-700">Tables</h2>
      </div>
    )
  }

  const renderPageUtilityItems = () => {
    return (
      <div className="utility-container">
        <SearchBar />
        <Button className="btn-plain color-gray-500" >
          <IoPersonSharp />
          <span>Sign In</span>
        </Button>
        <Button className="btn-plain color-gray-500" >
          <IoSettingsSharp />
        </Button>
        <Button className="btn-plain color-gray-500" >
          <IoNotificationsSharp />
        </Button>
      </div>
    )
  }

  const renderPageInfoAndUtilityItems = () => {
    return (
      <div className="page-info-container">
        {renderPageTitle()}
        {renderPageUtilityItems()}
      </div>
    )
  }

  return (
    <div className="top-bar">
      {renderDashboardTitle()}
      {renderPageInfoAndUtilityItems()}
    </div>
  )
};

export default TopBar;
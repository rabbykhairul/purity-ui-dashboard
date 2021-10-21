import React, { useContext } from "react";
import { IoNotificationsSharp, IoSettingsSharp, IoPersonSharp } from "react-icons/io5";
import { GiExitDoor } from "react-icons/gi";
import { useHistory, useLocation } from "react-router";
import UserContext from "../../contexts/UserContext";
import Button from "./Button";
import SearchBar from "./SearchBar";

const TITLE = "PURITY UI DASHBOARD";

const TopBar = () => {

  const history = useHistory();
  const location = useLocation();
  const userInfo = useContext(UserContext);

  const getPageTitle = () => {
    console.log("location: ", location);
    const pageTitle = location.pathname.split("/")[2] ?? "dashboard";
    return pageTitle[0].toUpperCase() + pageTitle.slice(1).toLowerCase();
  }

  const renderDashboardTitle = () => {
    return (
      <div className="title-container color-gray-700">
        <div className="masked bg-gray-light">
          <div className="logo-container">
            <img src={`${process.env.PUBLIC_URL}/logo-purity-ui-black.png`} alt="" />
          </div>
          <h1>{TITLE}</h1>
        </div>
      </div>
    )
  }

  const renderPageTitle = () => {
    return (
      <div className="page-title">
        <p className="color-gray-400">Pages / <span className="color-gray-700">{getPageTitle()}</span></p>
        <h2 className="color-gray-700">{getPageTitle()}</h2>
      </div>
    )
  }

  const renderSignInSignOutButton = () => {
    if (userInfo.user)
      return (
        <Button className="btn-plain color-gray-500" onClick={userInfo.userLoggedOut} >
          <GiExitDoor />
          <span>Sign Out</span>
        </Button>
      )
    else 
      return (
        <Button className="btn-plain color-gray-500" onClick={() => history.push("/login")} >
          <IoPersonSharp />
          <span>Sign In</span>
        </Button>
    )
  }

  const renderPageUtilityItems = () => {
    return (
      <div className="utility-container">
        <SearchBar />
        {renderSignInSignOutButton()}
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
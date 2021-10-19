import React from "react";

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

  const renderPageInfoAndUtilityItems = () => {
    return (
      <div className="page-info-container">
        {renderPageTitle()}
        <p>moo</p>
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
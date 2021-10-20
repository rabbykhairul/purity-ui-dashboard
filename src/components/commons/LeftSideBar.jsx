import React, { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Button from "./Button";

import { DASHBOARD_MENU, PROFILE_MENU } from "../../utils/menuItems";
import { useHistory, useLocation } from "react-router";

const LeftSideBar = () => {
  const location = useLocation();
  const history = useHistory();

  const [activeMenuItem, setActiveMenuItem] = useState(computeActiveMenuItemFromURL());

  function computeActiveMenuItemFromURL() {
    const activeMenuItem = DASHBOARD_MENU.items.find(item => location.pathname.includes(item.path));
    return activeMenuItem ?? DASHBOARD_MENU.items[0];
  }

  const handleRedirect = (menuItem) => {
    setActiveMenuItem(menuItem);
    history.push(menuItem.path);
  }

  const renderMenuItems = (menuInfo) => {
    const buttonClassActive = "active bg-white";
    const buttonClassInActive = "bg-transparent";
    const iconContainerClassActive = "bg-teal";
    const iconContainerClassInActive = "bg-white";
    const iconClassActive = "color-white";
    const iconClassInActive = "color-teal";

    const menuItems = menuInfo.items.map((item) => (
      <Button key={item.id} onClick={() => handleRedirect(item)} className={`btn-menu-item color-gray-700 ${item.id === activeMenuItem.id ? buttonClassActive : buttonClassInActive}`}>
        <span className={`menu-item-icon-container ${item.id === activeMenuItem.id ? iconContainerClassActive : iconContainerClassInActive}`}>
          <item.icon className={`menu-item-icon ${item.id === activeMenuItem.id ? iconClassActive : iconClassInActive}`} />
        </span>
        {item.label}
      </Button>
    ));

    return (
      <>
      {menuInfo.title && <p className="menu-title color-gray-700">{menuInfo.title}</p>}
      {menuItems}
      </>
    )
  }

  const renderHelpPrompt = () => {
    return (
      <div className="help-prompt color-white" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/themed-background-small.png')`}}>
        <p className="help-question">
          <span className="menu-item-icon-container bg-white"><BsFillQuestionCircleFill className="menu-item-icon color-teal" /></span>
        </p>
        <h5>Need help?</h5>
        <p className="help-hint">Please check our docs</p>
        <Button className="btn-menu-item bg-white color-gray-700">Documentation</Button>
      </div>
    )
  }

  return (
    <nav className="left-side-bar">
      {renderMenuItems(DASHBOARD_MENU)}
      {renderMenuItems(PROFILE_MENU)}
      {renderHelpPrompt()}
    </nav>
  )
};

export default LeftSideBar;
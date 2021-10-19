import React, { useState } from "react";
import Button from "./Button";

import { DASHBOARD_MENU, PROFILE_MENU } from "../../utils/menuItems";

const LeftSideBar = () => {

  const [activeMenuItem] = useState(DASHBOARD_MENU.items[0]);

  const renderMenuItems = (menuInfo) => {
    const buttonClassActive = "active bg-white";
    const buttonClassInActive = "bg-transparent";
    const iconContainerClassActive = "bg-teal";
    const iconContainerClassInActive = "bg-white";
    const iconClassActive = "color-white";
    const iconClassInActive = "color-teal";

    const menuItems = menuInfo.items.map((item) => (
      <Button key={item.id} className={`btn-menu-item color-gray-700 ${item.id === activeMenuItem.id ? buttonClassActive : buttonClassInActive}`}>
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

  return (
    <nav className="left-side-bar">
      {renderMenuItems(DASHBOARD_MENU)}
      {renderMenuItems(PROFILE_MENU)}
    </nav>
  )
};

export default LeftSideBar;
import React from "react";
import { IoHome } from "react-icons/io5";
import { IoMdStats } from "react-icons/io";
import { BsCreditCardFill } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import Button from "./Button";

const LeftSideBar = () => {

  const renderDashboardMenuItems = () => {
    return (
      <>
      <Button className="btn-menu-item active bg-white color-gray-700">
        <span className="menu-item-icon-container bg-teal"><IoHome className="menu-item-icon color-white" /></span>
        Dashboard
      </Button>
      <Button className="btn-menu-item bg-transparent color-gray-700">
        <span className="menu-item-icon-container bg-white"><IoMdStats className="menu-item-icon color-teal" /></span>
        Tables
      </Button>
      <Button className="btn-menu-item bg-transparent color-gray-700">
        <span className="menu-item-icon-container bg-white"><BsCreditCardFill className="menu-item-icon color-teal" /></span>
        Billing
      </Button>
      <Button className="btn-menu-item bg-transparent color-gray-700">
        <span className="menu-item-icon-container bg-white"><FaWrench className="menu-item-icon color-teal" /></span>
        RTL
      </Button>
      </>
    )
  }

  return (
    <nav className="left-side-bar">
      {renderDashboardMenuItems()}
    </nav>
  )
};

export default LeftSideBar;
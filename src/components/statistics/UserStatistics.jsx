import React from "react";
import { IoWallet } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaWrench } from "react-icons/fa";

const ITEMS = [
  {
    title: "Users",
    value: "32,984",
    percentageIncreased: 68,
    icon: IoWallet,
  },
  {
    title: "Clicks",
    value: "2.42m",
    percentageIncreased: 85,
    icon: IoIosRocket,
  },
  {
    title: "Sales",
    value: "2,400$",
    percentageIncreased: 38,
    icon: MdShoppingCart
  },
  {
    title: "Items",
    value: "320",
    percentageIncreased: 60,
    icon: FaWrench
  }
]

const UserStatistics = () => {

  const renderGraph = () => {
    return (
      <div className="user-graph-container"></div>
    )
  }

  const renderStatHeader = () => {
    return (
      <div className="stat-header">
        <h4 className="color-gray-700">Active Users</h4>
        <p className="color-gray-400"><span className="color-green-400">(+23)</span> than last week</p>
      </div>
    )
  }

  const renderHighlights = () => {
    const highlights = ITEMS.map((item, idx) => (
      <div key={idx} style={{ width: "18%" }}>
        <div className="title">
          <div className="icon-container">
            <span className="menu-item-icon-container short-stats-icon-container bg-teal">
              <item.icon className="menu-item-icon color-white" />
            </span>
          </div>
          <p className="color-gray-400">{item.title}</p>
        </div>
        <p className="color-gray-700">{item.value}</p>
        <div className="progress-bar-container bg-gray-300" style={{ width: "100%", height: "0.135vw" }}>
          <div className="progress-indicator bg-green-400" style={{ width: `${item.percentageIncreased}%` }}></div>
        </div>
      </div>
    ));

    return (
      <div className="highlights-container">
        {highlights}
      </div>
    )
  }

  return (
    <div className="user-statistics-container page-section bg-white">
      {renderGraph()}
      {renderStatHeader()}
      {renderHighlights()}
    </div>
  )
};

export default UserStatistics;
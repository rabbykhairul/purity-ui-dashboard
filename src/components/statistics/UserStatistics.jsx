import React from "react";
import { BarChart, Bar, YAxis, ResponsiveContainer } from 'recharts';
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
];

const userData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const UserStatistics = () => {

  const renderGraph = () => {
    return (
      <div className="user-graph-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={userData}>
            <YAxis tick={{ fill: "white", fontSize: "0.65vw" }} />
            <Bar dataKey="uv" fill="white" barSize={6.5} />
          </BarChart>
        </ResponsiveContainer>
      </div>
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
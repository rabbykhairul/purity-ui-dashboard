import React from "react";
import { BsGlobe } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { IoDocumentText, IoWallet } from "react-icons/io5";


const ITEMS = [
  {
    title: "Today's Money",
    value: "$53,000",
    percentageIncreased: 55,
    icon: IoWallet,
  },
  {
    title: "Today's Users",
    value: "2,300",
    percentageIncreased: 5,
    icon: BsGlobe,
  },
  {
    title: "New Clients",
    value: "+3,052",
    percentageIncreased: -14,
    icon: IoDocumentText,
  },
  {
    title: "Total Sales",
    value: "$173,000",
    percentageIncreased: 8,
    icon: MdShoppingCart,
  },
];

const ShortHighlights = () => {

  const renderHighlightCards = () => {
    return ITEMS.map((item, idx) => (
      <div key={idx} className="short-hightlight-box bg-white page-section">
        <div>
          <h6 className="color-gray-400">{item.title}</h6>
          <div className="highlight-info">
            <p>{item.value}</p>
            <p className={`${item.percentageIncreased <= 0 ? "color-red-500" : "color-green-400"}`}>{item.percentageIncreased <= 0 ? "" : "+"}{item.percentageIncreased}%</p>
          </div>
        </div>
        <div className="icon-container">
        <span className="menu-item-icon-container short-stats-icon-container bg-teal"><item.icon className="menu-item-icon color-white" /></span>
        </div>
      </div>
    ))
  }

  return (
    <div className="short-highlights-container">
      {renderHighlightCards()}
    </div>
  )
};

export default ShortHighlights;
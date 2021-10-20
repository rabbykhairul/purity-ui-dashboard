import React from "react";

const SalesStatistics = () => {

  const renderStatHeader = () => {
    return (
      <div className="stat-header">
        <h4 className="color-gray-700">Sales Overview</h4>
        <p className="color-gray-400"><span className="color-green-400">(+5) more</span> in 2021</p>
      </div>
    )
  }

  return (
    <div className="sales-statistics-container page-section bg-white">
      {renderStatHeader()}
    </div>
  )
};

export default SalesStatistics;
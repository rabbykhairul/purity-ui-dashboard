import React from "react";

const Table = (props) => {
  const { renderHeader } = props;

  return (
    <div className="table-container page-section bg-white">
      {renderHeader && renderHeader()}
    </div>
  )
};

export default Table;
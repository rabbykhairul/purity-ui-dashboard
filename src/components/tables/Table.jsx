import React from "react";

const Table = (props) => {
  const { renderHeader, renderColumnHeader } = props;

  return (
    <div className="table-container page-section bg-white">
      {renderHeader && renderHeader()}
      <table>
        {renderColumnHeader()}
      </table>
    </div>
  )
};

export default Table;
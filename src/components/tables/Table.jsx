import React from "react";

const Table = (props) => {
  const { items, renderHeader, renderColumnHeader, renderRow } = props;

  return (
    <div className="table-container page-section bg-white">
      {renderHeader && renderHeader()}
      <table>
        {renderColumnHeader()}
        {items.map((item, idx) => renderRow(item, idx))}
      </table>
    </div>
  )
};

export default Table;
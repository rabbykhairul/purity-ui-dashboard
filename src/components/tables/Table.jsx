import React from "react";

const Table = (props) => {
  const { items, renderHeader, renderColumnHeader, renderRow, onRowClick } = props;

  return (
    <div className="table-container page-section bg-white">
      {renderHeader && renderHeader()}
      <table>
        <thead>
          {renderColumnHeader()}
        </thead>
        <tbody>
          {items.map((item, idx) => renderRow(item, idx, onRowClick))}
        </tbody>
      </table>
    </div>
  )
};

export default Table;
import React from "react";

export const renderAutherTableHeader = () => {
  return <h2 className="color-gray-700">Authors Table</h2>;
}

export const renderAutherTableColumnHeaders = () => {
  return (
    <tr className="color-gray-400">
      <th className="first-column">Author</th>
      <th>Function</th>
      <th>Status</th>
      <th>Employed</th>
      <th></th>
    </tr>
  )
}
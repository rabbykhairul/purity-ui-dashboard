import React from "react";
import Button from "../components/commons/Button";

const isAutherOnline = (status) => status.toLowerCase() === "online";

const renderAutherBasicInfo = (autherDetails) => {
  const { fullName, email } = autherDetails;

  return (
    <div className="auther-info">
      <div className="auther-pic-container bg-gray-300"></div>
      <div>
        <h5 className="color-gray-700">{fullName}</h5>
        <p className="color-gray-400">{email}</p>
      </div>
    </div>
  )
}

const renderAutherRoleInfo = (autherDetails) => {
  const { role, level } = autherDetails;

  return (
    <div className="role-info">
      <h5 className="color-gray-700">{role}</h5>
      <p className="color-gray-400">{level}</p>
    </div>
  )
}

const renderAutherStatus = (autherDetails) => {
  const { status } = autherDetails;
  const isOnline = isAutherOnline(status);

  return <p className={`auther-status color-white ${isOnline ? "bg-green-400" : "bg-gray-300"}`}>{status}</p>
}

const renderJoiningDate = (autherDetails) => {
  const { joiningDate } = autherDetails;
  return <p className="joining-date color-gray-700">{joiningDate}</p>
}

export const renderAutherTableHeader = () => {
  return <h2 className="color-gray-700">Authors Table</h2>;
}

export const renderAutherTableColumnHeaders = () => {
  return (
    <tr className="color-gray-400 column-header-row">
      <th className="first-column">Author</th>
      <th className="middle-column">Function</th>
      <th className="middle-column">Status</th>
      <th className="middle-column">Employed</th>
      <th className="last-column"></th>
    </tr>
  )
}

export const renderAutherTableRow = (autherDetails, key) => {
  return (
    <tr key={key} className="data-row">
      <td className="first-column">{renderAutherBasicInfo(autherDetails)}</td>
      <td className="middle-column">{renderAutherRoleInfo(autherDetails)}</td>
      <td className="middle-column">{renderAutherStatus(autherDetails)}</td>
      <td className="middle-column">{renderJoiningDate(autherDetails)}</td>
      <td className="last-column"><Button className="btn-plain color-gray-500" >Edit</Button></td>
    </tr>
  )
}
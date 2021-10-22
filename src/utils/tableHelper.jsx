import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiUserAddFill } from "react-icons/ri";
import { MdCreateNewFolder } from "react-icons/md";
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

const renderProjectBasicInfo = (projectDetails) => {
  const { title } = projectDetails;
  return (
    <div className="project-info">
      <div className="project-logo-container bg-gray-300"></div>
      <p className="project-table-text">{title}</p>
    </div>
  )
}

const renderProjectCompletionPercentage = (projectDetails) => {
  const { completionParcentage } = projectDetails;

  return (
    <>
    <p className="project-table-text color-teal-300">{projectDetails.completionParcentage}%</p>
    <div className="progress-bar-container bg-gray-200">
      <div className="progress-indicator bg-teal-300" style={{ width: `${completionParcentage}%` }}></div>
    </div>
    </>
  )
}

export const renderAutherTableHeader = () => {
  return (
    <div className="table-header-box">
      <h2 className="color-gray-700">Authors Table</h2>
      <Button className="btn-plain color-gray-400">
        <RiUserAddFill />
        <span>Add new</span>
      </Button>
    </div>
  );
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

export const renderAutherTableRow = (autherDetails, key, onClick = () => {}) => {
  return (
    <tr key={key} className="data-row">
      <td className="first-column">{renderAutherBasicInfo(autherDetails)}</td>
      <td className="middle-column">{renderAutherRoleInfo(autherDetails)}</td>
      <td className="middle-column">{renderAutherStatus(autherDetails)}</td>
      <td className="middle-column">{renderJoiningDate(autherDetails)}</td>
      <td className="last-column"><Button className="btn-plain color-gray-500" onClick={() => onClick(autherDetails)} >Edit</Button></td>
    </tr>
  )
}

export const renderProjectTableHeader = () => {
  return (
    <div className="table-header-box">
      <div className="project-table-header">
        <h2 className="color-gray-700">Projects</h2>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1.35vw" }}>
          <AiFillCheckCircle className="color-green-400 icon-mini" />
          <p className="color-gray-400"><span>30 done</span> this month</p>
        </div>
      </div>
      <Button className="btn-plain color-gray-400">
        <MdCreateNewFolder />
        <span>Add new</span>
      </Button>
    </div>
  );
}

export const renderProjectTableColumnHeaders = () => {
  return (
    <tr className="color-gray-400 column-header-row project-table-row">
      <th className="first-column">Companies</th>
      <th className="middle-column">Budget</th>
      <th className="middle-column">Status</th>
      <th className="middle-column">Completion</th>
      <th className="last-column"></th>
    </tr>
  )
}

export const renderProjectTableRow = (projectDetails, key) => {
  return (
    <tr key={key} className="data-row project-table-row color-gray-700">
      <td className="first-column">{renderProjectBasicInfo(projectDetails)}</td>
      <td className="middle-column"><p className="project-table-text">{projectDetails.budget ? "$" + projectDetails.budget : "Not Set"}</p></td>
      <td className="middle-column"><p className="project-table-text">{projectDetails.status}</p></td>
      <td className="middle-column">{renderProjectCompletionPercentage(projectDetails)}</td>
      <td className="last-column"><Button className="btn-plain color-gray-500" ><BsThreeDotsVertical /></Button></td>
    </tr>
  );
}
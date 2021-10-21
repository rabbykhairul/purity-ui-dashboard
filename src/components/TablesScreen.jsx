import React, { useContext } from "react";
import AuthorContext from "../contexts/AuthorContext";
import { renderAutherTableColumnHeaders, renderAutherTableHeader, renderAutherTableRow, renderProjectTableColumnHeaders, renderProjectTableHeader, renderProjectTableRow } from "../utils/tableHelper";
import PageFooter from "./commons/PageFooter";
import Table from "./tables/Table";

export const authors = [
  {
    fullName: "Esthera Jackson",
    email: "esthera@simmmple.com",
    role: "Manager",
    level: "Organization",
    status: "Online",
    joiningDate: "14/06/21"
  },
  {
    fullName: "Alexa Liras",
    email: "alexa@simmmple.com",
    role: "Programmer",
    level: "Developer",
    status: "Offline",
    joiningDate: "14/06/21"
  },
  {
    fullName: "Esthera Jackson",
    email: "esthera@simmmple.com",
    role: "Manager",
    level: "Organization",
    status: "Online",
    joiningDate: "14/06/21"
  },
  {
    fullName: "Alexa Liras",
    email: "alexa@simmmple.com",
    role: "Programmer",
    level: "Developer",
    status: "Offline",
    joiningDate: "14/06/21"
  },
  
];

const projects = [
  {
    title: "Chakra Soft UI Version",
    budget: 14000,
    status: "Working",
    completionParcentage: 60,
  },
  {
    title: "Add Progress Track",
    budget: 3000,
    status: "Canceled",
    completionParcentage: 10,
  },
  {
    title: "Fix Platform Errors",
    budget: 0,
    status: "Done",
    completionParcentage: 100,
  },
  {
    title: "Launch Our Moile App",
    budget: 32000,
    status: "Done",
    completionParcentage: 100,
  },
  {
    title: "Add The New Pricing Page",
    budget: 400,
    status: "Working",
    completionParcentage: 32,
  }
]

const TablesScreen = () => {
  const { authors } = useContext(AuthorContext);

  return (
    <div className="tables-screen">
      <div>
        <Table items={authors} renderHeader={renderAutherTableHeader} renderColumnHeader={renderAutherTableColumnHeaders} renderRow={renderAutherTableRow} />
        <Table items={projects} renderHeader={renderProjectTableHeader} renderColumnHeader={renderProjectTableColumnHeaders} renderRow={renderProjectTableRow} />
      </div>
      <PageFooter className="footer-with-vertical-gap" />
    </div>
  );
};

export default TablesScreen;
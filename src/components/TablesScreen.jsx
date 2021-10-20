import React from "react";
import { renderAutherTableColumnHeaders, renderAutherTableHeader, renderAutherTableRow } from "../utils/tableHelper";
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

const TablesScreen = () => {
  return (
    <div className="tables-screen">
      <div>
        <Table items={authors} renderHeader={renderAutherTableHeader} renderColumnHeader={renderAutherTableColumnHeaders} renderRow={renderAutherTableRow} />
      </div>
      <PageFooter className="footer-with-vertical-gap" />
    </div>
  );
};

export default TablesScreen;
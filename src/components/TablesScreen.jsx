import React from "react";
import { renderAutherTableColumnHeaders, renderAutherTableHeader } from "../utils/tableHelper";
import PageFooter from "./commons/PageFooter";
import Table from "./tables/Table";

const TablesScreen = () => {
  return (
    <div className="tables-screen">
      <div>
        <Table renderHeader={renderAutherTableHeader} renderColumnHeader={renderAutherTableColumnHeaders} />
      </div>
      <PageFooter className="footer-with-vertical-gap" />
    </div>
  );
};

export default TablesScreen;
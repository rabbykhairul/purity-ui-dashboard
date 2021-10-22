import React, { useContext } from "react";
import AuthorContext from "../contexts/AuthorContext";
import ProjectContext from "../contexts/ProjectContext";
import { renderAutherTableColumnHeaders, renderAutherTableHeader, renderAutherTableRow, renderProjectTableColumnHeaders, renderProjectTableHeader, renderProjectTableRow } from "../utils/tableHelper";
import PageFooter from "./commons/PageFooter";
import Table from "./tables/Table";

const TablesScreen = () => {
  const { authors, authorSelected, createNewAuthor } = useContext(AuthorContext);
  const { projects, projectSelected, createNewProject } = useContext(ProjectContext);

  return (
    <div className="tables-screen">
      <div>
        <Table items={authors} renderHeader={renderAutherTableHeader} onAddNewClick={createNewAuthor} renderColumnHeader={renderAutherTableColumnHeaders} renderRow={renderAutherTableRow} onRowClick={authorSelected} />
        <Table items={projects} renderHeader={renderProjectTableHeader} onAddNewClick={createNewProject} renderColumnHeader={renderProjectTableColumnHeaders} renderRow={renderProjectTableRow} onRowClick={projectSelected} />
      </div>
      <PageFooter className="footer-with-vertical-gap" />
    </div>
  );
};

export default TablesScreen;
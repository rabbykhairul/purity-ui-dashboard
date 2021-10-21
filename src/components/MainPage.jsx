import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import AuthorContext from "../contexts/AuthorContext";
import { getAuthors } from "../services/authorService";
import LeftSideBar from "./commons/LeftSideBar";
import TopBar from "./commons/TopBar";
import DashboardScreen from "./DashboardScreen";
import TablesScreen from "./TablesScreen";
import Button from "./commons/Button";

const MainPage = () => {
  const location = useLocation();

  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    loadAuthors();
  }, [])

  const loadAuthors = async () => {
    const authors = await getAuthors();
    if (authors) setAuthors(authors);
  }

  const addNewAuthor = (author) => setAuthors([ author, ...authors ]);
  const removeDeletedAuthor = (author) => setAuthors(authors.filter(a => a._id !== author._id));
  const storeSelectedAuthor = (author) => setSelectedAuthor(author);
  const updateAuthor = (author) => {
    const allAuthors = [ ...authors ];
    const targetAuthorIdx = allAuthors.findIndex(a => a._id === author._id);
    allAuthors[targetAuthorIdx] = author;

    setAuthors(allAuthors);
  }

  const renderContents = () => {
    if (location.pathname.includes("dashboard") || location.pathname === "/pages") return <DashboardScreen />;
    else if (location.pathname.includes("tables")) return <TablesScreen />;

    return null;
  }

  return (
    <div className="page-container main-page bg-gray-light">
      <TopBar />
      <LeftSideBar />
      <AuthorContext.Provider value={{ authors, selectedAuthor, authorSelected: storeSelectedAuthor, authorCreated: addNewAuthor, authorDeleted: removeDeletedAuthor, authorUpdated: updateAuthor }}>
        {renderContents()}
      </AuthorContext.Provider>
    </div>
  )
};

export default MainPage;
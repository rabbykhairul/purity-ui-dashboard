import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { BsArrowRightCircleFill } from "react-icons/bs";
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

  const [displaySideOverlay, setDisplaySideOverlay] = useState(false);

  useEffect(() => {
    loadAuthors();
  }, [])

  useEffect(() => {
    if (selectedAuthor) setDisplaySideOverlay(true);
    else setDisplaySideOverlay(false);
  }, [selectedAuthor]);

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

  const renderOverlayCloseButton = () => {
    return (
      <Button className="bg-gray-light color-gray-500" onClick={() => setSelectedAuthor(null)}>
        <BsArrowRightCircleFill />
        <span>Cancel</span>
      </Button>
    )
  }

  const renderRightSideOverlay = () => {
    if (displaySideOverlay)
      return (
        <div className="right-side-overlay bg-white">
          {renderOverlayCloseButton()}
        </div>
      );
    else return null;
  }

  return (
    <div className="page-container main-page bg-gray-light">
      <TopBar />
      <LeftSideBar />
      <AuthorContext.Provider value={{ authors, selectedAuthor, authorSelected: storeSelectedAuthor, authorCreated: addNewAuthor, authorDeleted: removeDeletedAuthor, authorUpdated: updateAuthor }}>
        {renderContents()}
        {renderRightSideOverlay()}
      </AuthorContext.Provider>
    </div>
  )
};

export default MainPage;
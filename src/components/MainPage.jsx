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
import AuthorForm from "./forms/AuthorForm";
import { getProjects } from "../services/projectService";

const MainPage = () => {
  const location = useLocation();

  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [displaySideOverlay, setDisplaySideOverlay] = useState(false);

  useEffect(() => {
    loadAuthors();
    loadProjects();
  }, [])

  const loadAuthors = async () => {
    const authors = await getAuthors();
    if (authors) setAuthors(authors);
  }

  const loadProjects = async () => {
    const projects = await getProjects();
    if (projects) setProjects(projects);
  }

  const addNewAuthor = (author) => {
    setAuthors([ author, ...authors ]);
    setDisplaySideOverlay(false);
  };
  const removeDeletedAuthor = (author) => {
    setAuthors(authors.filter(a => a._id !== author._id));
    setSelectedAuthor(null);
    setDisplaySideOverlay(false);
  }
  const storeSelectedAuthor = (author) => {
    setSelectedAuthor(author);
    setDisplaySideOverlay(true);
  };
  const updateAuthor = (author) => {
    const allAuthors = [ ...authors ];
    const targetAuthorIdx = allAuthors.findIndex(a => a._id === author._id);
    allAuthors[targetAuthorIdx] = author;

    setAuthors(allAuthors);
    setDisplaySideOverlay(false);
  }
  const createNewAuthor = () => {
    setSelectedAuthor(null);
    setDisplaySideOverlay(true);
  }

  const renderContents = () => {
    if (location.pathname.includes("dashboard") || location.pathname === "/pages") return <DashboardScreen />;
    else if (location.pathname.includes("tables")) return <TablesScreen />;

    return null;
  }

  const closeTheOverlay = () => {
    setSelectedAuthor(null);
    setDisplaySideOverlay(false);
  }

  const renderOverlayCloseButton = () => {
    return (
      <Button className="bg-gray-light color-gray-500" onClick={closeTheOverlay}>
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
          <AuthorForm />
        </div>
      );
    else return null;
  }

  return (
    <div className="page-container main-page bg-gray-light">
      <TopBar />
      <LeftSideBar />
      <AuthorContext.Provider value={{ authors, selectedAuthor, createNewAuthor, authorSelected: storeSelectedAuthor, authorCreated: addNewAuthor, authorDeleted: removeDeletedAuthor, authorUpdated: updateAuthor }}>
        {renderContents()}
        {renderRightSideOverlay()}
      </AuthorContext.Provider>
    </div>
  )
};

export default MainPage;
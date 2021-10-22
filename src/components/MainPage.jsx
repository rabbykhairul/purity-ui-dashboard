import React, { useEffect, useState, useContext } from "react";
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
import ProjectForm from "./forms/ProjectForm";
import ProjectContext from "../contexts/ProjectContext";
import UserContext from "../contexts/UserContext";

const TYPE_PROJECT = "project";
const TYPE_AUTHOR = "author";

const MainPage = () => {
  const location = useLocation();
  const userInfo = useContext(UserContext);

  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [displaySideOverlay, setDisplaySideOverlay] = useState(false);
  const [overlayFor, setOverlayFor] = useState(TYPE_AUTHOR);

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
    setOverlayFor(TYPE_AUTHOR);
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
    setOverlayFor(TYPE_AUTHOR);
    setDisplaySideOverlay(true);
  }

  const addNewProject = (project) => {
    setProjects([ project, ...projects ]);
    setDisplaySideOverlay(false);
  };
  const removeDeletedProject = (project) => {
    setProjects(projects.filter(p => p._id !== project._id));
    setSelectedProject(null);
    setDisplaySideOverlay(false);
  }
  const storeSelectedProject = (project) => {
    setSelectedProject(project);
    setOverlayFor(TYPE_PROJECT);
    setDisplaySideOverlay(true);
  };
  const updateProject = (project) => {
    const allProjects = [ ...projects ];
    const targetProjectIdx = allProjects.findIndex(p => p._id === project._id);
    allProjects[targetProjectIdx] = project;

    setProjects(allProjects);
    setDisplaySideOverlay(false);
  }
  const createNewProject = () => {
    setSelectedProject(null);
    setOverlayFor(TYPE_PROJECT);
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

  const renderAccessDeniedMessage = () => {
    return <div className="access-denied-container">
      <p className="color-red-500">You need to be logged in to access this functionality!</p>
    </div>
  }

  const renderRightSideOverlay = () => {
    if (displaySideOverlay && userInfo.user)
      return (
        <div className="right-side-overlay bg-white">
          {renderOverlayCloseButton()}
          {overlayFor === TYPE_AUTHOR && <AuthorForm />}
          {overlayFor === TYPE_PROJECT && <ProjectForm /> }
        </div>
      );
    else if (displaySideOverlay) 
        return (
          <div className="right-side-overlay bg-white">
            {renderOverlayCloseButton()}
            {renderAccessDeniedMessage()}
          </div>
        )
    else return null;
  }

  return (
    <div className="page-container main-page bg-gray-light">
      <TopBar />
      <LeftSideBar />
      <AuthorContext.Provider value={{ authors, selectedAuthor, createNewAuthor, authorSelected: storeSelectedAuthor, authorCreated: addNewAuthor, authorDeleted: removeDeletedAuthor, authorUpdated: updateAuthor }}>
        <ProjectContext.Provider value={{ projects, selectedProject, createNewProject, projectSelected: storeSelectedProject, projectCreated: addNewProject, projectDeleted: removeDeletedProject, projectUpdated: updateProject}} >
          {renderContents()}
          {renderRightSideOverlay()}
        </ProjectContext.Provider>
      </AuthorContext.Provider>
    </div>
  )
};

export default MainPage;
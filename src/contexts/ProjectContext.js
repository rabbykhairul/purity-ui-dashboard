import { createContext } from "react";

const ProjectContext = createContext({
  projects: [],
  selectedProject: null,
  projectSelected: (project) => project,
  projectCreated: (project) => project,
  projectUpdated: (project) => project,
  projectDeleted: (project) => project,
  createNewProject: () => {}
});

export default ProjectContext;
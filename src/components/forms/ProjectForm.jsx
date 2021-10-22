import React, { useContext, useState } from "react";
import { FaDatabase, FaTrash } from "react-icons/fa";
import Input from "../commons/Input";
import FileInput from "../commons/FileInput";
import Button from "../commons/Button";
import ProjectContext from "../../contexts/ProjectContext";
import { createProject, deleteProject, updateProject } from "../../services/projectService";

const ProjectForm = () => {

  const { selectedProject, projectCreated, projectUpdated, projectDeleted } = useContext(ProjectContext);

  const [title, setTitle] = useState(selectedProject?.title || "");
  const [budget, setBudget] = useState(selectedProject?.budget || 0);
  const [status, setStatus] = useState(selectedProject?.status || "");
  const [completionPercentage, setCompletionPercentage] = useState(selectedProject?.completionPercentage || 0);
  const [projectLogo, setProjectLogo] = useState(null);

  const validateFormData = () => title;

  const generatePayload = () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("budget", budget);
    formData.append("status", status);
    formData.append("completionPercentage", completionPercentage);
    if (projectLogo) formData.append("projectLogo", projectLogo, projectLogo?.name);

    return formData;
  }

  const updateProjectDetails = async () => {
    const payload = generatePayload();
    const updatedProject = await updateProject(selectedProject._id, payload)
    if (updatedProject) {
      projectUpdated(updatedProject);
    } else projectUpdated(selectedProject);
  }

  const createNewProject = async () => {
    const payload = generatePayload();
    const newProject = await createProject(payload)

    if (newProject) projectCreated(newProject);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValidationPassed = validateFormData();

    if (formValidationPassed) {
      if (selectedProject) updateProjectDetails();
      else createNewProject();
    }
  }

  const handleDelete = () => {
    deleteProject(selectedProject._id);
    projectDeleted(selectedProject);
  }

  return (
    <form className="overlay-form" onSubmit={handleSubmit}>
      <Input title="Project title" name="title" placeholder="Enter project's name" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input title="Budget" name="budget" placeholder="Enter project budget" type="number" value={budget} onChange={(e) => setBudget(e.target.value)} min="0" />
      <Input title="Status" name="status" placeholder="eg. Working" value={status} onChange={(e) => setStatus(e.target.value)} />
      <Input title="Project progress(0% -100%)" name="completionPercentage" placeholder="eg. 10" type="number" value={completionPercentage} onChange={(e) => setCompletionPercentage(e.target.value)} min="0" max="100" />
      <FileInput id="project-logo" className="file-input" displayTitle={projectLogo ? projectLogo.name : "Please select a project logo"} accept="image/*" onChange={(e) => setProjectLogo(e.target?.files?.[0])} />
      <div className="btn-container">
        {selectedProject && 
          <Button className="bg-red-500" onClick={handleDelete} >
            <FaTrash />
            <span>Delete</span>
          </Button>
        }
        <Button className="bg-green-400" type="submit" >
          <FaDatabase />
          <span>Save</span>
        </Button>
      </div>
    </form>
  )
};

export default ProjectForm;
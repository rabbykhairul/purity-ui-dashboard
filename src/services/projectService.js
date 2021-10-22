import http from "./httpService";
import { getBearerHeader } from "./authService";

const PROJECT_API_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/projects`;

export const getProjects = async () => {
  try {
    const { data } = await http.get(PROJECT_API_ENDPOINT);
    return data.projects;
  } catch (err) {
    console.log("Error while fetching projects: ", err);

    return null;
  }
}

export const createProject = async (payload, token) => {
  try {
    const { data } = await http.post(PROJECT_API_ENDPOINT, payload, { headers: getBearerHeader(token) });
    return data.project;
  } catch (err) {
    console.log("Error while creating project: ", err);
    return null;
  }
}

export const deleteProject = async (projectId, token) => {
  try {
    await http.delete(`${PROJECT_API_ENDPOINT}/${projectId}`, { headers: getBearerHeader(token) });
  } catch (err) {
    console.log("Error while deleting project: ", err);
  }
}

export const updateProject = async (projectId, payload, token) => {
  try {
    const { data } = await http.put(`${PROJECT_API_ENDPOINT}/${projectId}`, payload, { headers: getBearerHeader(token) });
    return data.project;
  } catch (err) {
    console.log("Error while updating project: ", err);
    return null;
  }
}
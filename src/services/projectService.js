import http from "./httpService";

const PROJECT_API_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/projects`;

export const getProjects = async () => {
  try {
    const { data } = await http.get(PROJECT_API_ENDPOINT);
    return data.projects;
  } catch (err) {
    console.log("Error while fetching projects: ", err);

    return { projects: null };
  }
}
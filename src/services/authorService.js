import http from "./httpService";

const AUTHOR_API_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/authors`;

export const getAuthors = async () => {
  try {
    const { data } = await http.get(AUTHOR_API_ENDPOINT);
    return data.authors;
  } catch (err) {
    console.log("Error while fetching authors: ", err);

    return { authors: null };
  }
}
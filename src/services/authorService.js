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

export const deleteAuthor = async (authorId) => {
  try {
    await http.delete(`${AUTHOR_API_ENDPOINT}/${authorId}`);
  } catch (err) {
    console.log("Error while deleting authors: ", err);
  }
}

export const updateAuthor = async (authorId, payload) => {
  try {
    const { data } = await http.put(`${AUTHOR_API_ENDPOINT}/${authorId}`, payload);
    return data.author;
  } catch (err) {
    console.log("Error while updating author: ", err);
    return null;
  }
}
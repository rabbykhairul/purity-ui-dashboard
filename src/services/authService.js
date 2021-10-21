import http from "./httpService";

const { REACT_APP_API_BASE_URL : API_BASE_URL} = process.env
const REGISTER_USER_API_ENDPOINT = `${API_BASE_URL}/auth/register`;

export const registerUser = async (userDetails) => {
  try {
    const { data } = await http.post(REGISTER_USER_API_ENDPOINT, userDetails);
    return data;
  } catch (err) {
    console.log("Error while registering user: ", err);
  }
}
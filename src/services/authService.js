import http from "./httpService";

const { REACT_APP_API_BASE_URL : API_BASE_URL} = process.env
const REGISTER_USER_API_ENDPOINT = `${API_BASE_URL}/auth/register`;
const LOGIN_USER_API_ENDPOINT = `${API_BASE_URL}/auth/login`;

export const getBearerHeader = (token) => ({ Authorization: token });

export const registerUser = async (userDetails) => {
  try {
    const { data } = await http.post(REGISTER_USER_API_ENDPOINT, userDetails);
    return data;
  } catch (err) {
    console.log("Error while registering user: ", err);
    return { user: null };
  }
}

export const loginUser = async (email, password) => {
  try {
    const { data } = await http.post(LOGIN_USER_API_ENDPOINT, { email, password });
    return data;
  } catch (err) {
    console.log("Error while login: ", err);
    return { user: null };
  }
}
import http from "./httpService";

const { REACT_APP_API_BASE_URL : API_BASE_URL} = process.env
const REGISTER_USER_API_ENDPOINT = `${API_BASE_URL}/auth/register`;

let BEARER_TOKEN = "";

export const getBearerToken = () => BEARER_TOKEN;

const setBearerToken = (token) => BEARER_TOKEN = token;

export const registerUser = async (userDetails) => {
  try {
    const { data } = await http.post(REGISTER_USER_API_ENDPOINT, userDetails);
    setBearerToken(data.token);
    return data;
  } catch (err) {
    console.log("Error while registering user: ", err);
  }
}
import axios from "axios";
const TTP_API_URL = "https://api-b4-learning.azurewebsites.net/api/";

export const registerUser = ({ user }) => {
  // const fields = ["*"];

  const requestUrl = `${TTP_API_URL}/registration`;

  // let params = {
  //   fields: fields.join(",")
  // };

  return axios.post(requestUrl, user);
};

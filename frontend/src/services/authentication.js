import { endpoint, axiosInstance } from "./path";

export const loginUser = async ({ username, password }) => {
  const data = await axiosInstance
    .post(endpoint.login, { username, password })
    .then((response) => {
      const result = response.data;
      return result;
    })
    .catch((e) => {
      console.log(e);
    });
  return data;
};

// export const logOutUser = async(body)=>{

// }

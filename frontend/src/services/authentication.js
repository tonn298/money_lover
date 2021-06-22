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

export const registerUser = async (param) => {
  const data = await axiosInstance
    .post(endpoint.register, param)
    .then((response) => {
      const result = response.data;
      return result;
    })
    .catch((e) => {
      console.log(e);
    });
  return data;
};

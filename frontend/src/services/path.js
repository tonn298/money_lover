// TODOS: get form ENV later

import axios from "axios";

export const baseURL = "http://localhost:8000/";

// const token = "insert something";
export const endpoint = {
  transactions: "/app/transactions/",
  category: "/app/category/",
  login: "/authen-api/login/",
};

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer " + token,
  },
});

// TODOS make it ?
// export const apiHelper = () => {
//   if (method = sth)
//   return config
// }

// TODOS: get form ENV later

import axios from "axios";

export const baseURL = "http://localhost:8000/";

export const endpoint = {
  transactions: "/app/transactions/",
  category: "/app/category/",
};

export const config = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

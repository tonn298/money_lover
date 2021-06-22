import { endpoint, axiosInstance } from "./path";

export const getCategories = async () => {
  const data = await axiosInstance
    .get(endpoint.category)
    .then((response) => {
      const result = response.data;
      return result;
    })
    .catch((e) => {
      console.log(e);
    });
  return data;
};

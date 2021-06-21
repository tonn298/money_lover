import { endpoint, config } from "./path";
import { convertDataForApi } from "../utils/format";

export const getTransactions = async () => {
  const data = await config
    .get(endpoint.transactions)
    .then((response) => {
      const result = response.data;
      return result;
    })
    .catch((e) => {
      console.log(e);
    });
  return data;
};

export const createTransaction = async (data) => {
  const queryData = convertDataForApi(data);
  console.log(queryData);

  const request = await config
    .post(endpoint.transactions, queryData)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

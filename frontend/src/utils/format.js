export const convertDataForApi = (data) => {
  if (data.is_expense === "True") {
    data.is_expense = true;
  }
  if (data.category === "not selected") {
    data.category = null;
  }

  return data;
};

import { client } from "../utils/fetchClients";

// export const getList = (route) => {
//   return client.get(`/${route}`);
// };

export const postLogin = data => {
  return client.post(`/login`, data);
};

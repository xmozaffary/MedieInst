import axios from "axios";
export const get = async <T>(url: string): Promise<T> => {
  const resp = await axios.get<T>(url);
  const data = resp.data;
  return data;
};

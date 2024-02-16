import { http, baseUrl } from "../utils";

const getAllProducts = async() => {
  const products = await http.get(`${baseUrl()}/products`)
  return products.data
};

export { getAllProducts };

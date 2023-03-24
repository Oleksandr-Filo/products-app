import { Product } from "../types/Product";
import { client } from "./fetchClient";

export const getAllProducts = () => {
  return client.get<Product[]>('/products');
};

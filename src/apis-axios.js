import axios from "axios";

const baseUrl = "https://6624eb0804457d4aaf9d50b2.mockapi.io/items/";

const prodInstance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar", batch: "FSD56WE-T" },
});

// const paymentInstance = axios.create({
//   baseURL: "https://payments.amazon.com/payments",
//   timeout: 10000,
//   headers: { "X-Custom-Header": "hoobar" },
// });

const getAllItems = async () => {
  const response = await prodInstance.get("");
  return response.data;
};

const getProduct = async (itemId) => {
  return (await prodInstance.get(`${itemId}`)).data;
};

const createProduct = async (pdData) => {
  const response = await prodInstance.post("", pdData);
  return response.data;
};

const updateProduct = async (pdData, itemId) => {
  return (await prodInstance.put(`${itemId}`, pdData)).data;
};

const deleteProduct = async (itemId) => {
  const response = await prodInstance.delete(`${itemId}`);
  return response.data;
};

export { getAllItems, deleteProduct, getProduct, updateProduct, createProduct };

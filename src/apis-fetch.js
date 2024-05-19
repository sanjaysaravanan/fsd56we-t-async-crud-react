// this is the file where we talk with internet
// that is API request and response manipulations

const baseUrl = "https://6624eb0804457d4aaf9d50b2.mockapi.io/items";

// a async function --> returns a promise
const processResponse = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

// read all the products data
const getAllItems = async () => {
  return await processResponse(baseUrl);
};

// get a single product
const getProduct = async (itemId) => {
  return await processResponse(`${baseUrl}/${itemId}`);
};

// delete a particular product
const deleteProduct = async (itemId) => {
  return await processResponse(`${baseUrl}/${itemId}`, {
    method: "DELETE",
  });
};

const createProduct = async (pdData) => {
  return await processResponse(baseUrl, {
    method: "POST",
    body: JSON.stringify(pdData),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};

const updateProduct = async (pdData, itemId) => {
  return await processResponse(`${baseUrl}/${itemId}`, {
    method: "PUT",
    body: JSON.stringify(pdData),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};

export { getAllItems, getProduct, deleteProduct, createProduct, updateProduct };

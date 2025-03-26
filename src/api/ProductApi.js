import axios from "axios";

const API_URL = "https://67a4a138c0ac39787a1bf048.mockapi.io/products";

// Get all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);  
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Get a single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

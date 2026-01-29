import axios from "axios";

const API_URL = "http://localhost:5000/api/hotels";

export const searchHotels = async (params) => {
  const res = await axios.get(`${API_URL}/search`, { params });
  return res.data;
};

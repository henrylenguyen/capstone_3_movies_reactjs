import axios from "axios";
import { ACCESS_TOKEN } from "constants/constants";
import { BASE_URL, TOKEN } from "constants/constants";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN,
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
  },
});

export default axiosClient;

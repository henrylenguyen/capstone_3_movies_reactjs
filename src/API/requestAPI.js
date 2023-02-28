import axios from "axios";
import { BASE_URL, TOKEN } from "constants/constants";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN,
  },
});

export default axiosClient;

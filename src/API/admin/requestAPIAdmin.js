import axios from "axios";
import { TOKEN_CYBERSOFT } from "constants/admin/constants";
import { BASE_URL } from "constants/admin/constants";



 const AdminRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});
export default AdminRequest;
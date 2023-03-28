import axios from "axios";
import { TOKEN_CYBERSOFT } from "constants/admin/constants";
import { BASE_URL, ACCESS_TOKEN_ADMIN } from "constants/admin/constants";



 const AdminRequest = axios.create({
   baseURL: BASE_URL,
   headers: {
     TokenCybersoft: TOKEN_CYBERSOFT,
     //  lấy token dưới local storage lên gắn thêm Bearer của jwt
     Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN_ADMIN),
   },
 });
export default AdminRequest;
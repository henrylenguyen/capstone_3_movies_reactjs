import AdminHomePage from "pages/Admin/AdminHomePage";
import LoginPage from "pages/Admin/LoginPage";

const routesAdmin = [
  {
    path: "admin/login",
    element: LoginPage,
  },
  {
    path: "/",
    element: AdminHomePage,
  },
];
export default routesAdmin;

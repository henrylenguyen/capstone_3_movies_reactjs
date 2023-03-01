
import ListPage from "layouts/admin/ListPage";
import AdminHomePage from "pages/Admin/AdminHomePage";
const routesAdmin = [
  {
    path: "/admin/home",
    element: AdminHomePage,
  },
  {
    path: "/admin/danh-sach",
    element: ListPage,
    slug: true
  },
];
export default routesAdmin;

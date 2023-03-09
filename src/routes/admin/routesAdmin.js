import AdminHomePage from "pages/Admin/AdminHomePage";
import AddNewCinema from "pages/Admin/cinema/AddNewCinema";
import CinemaList from "pages/Admin/cinema/CinemaList";
import SettingPage from "pages/Admin/config/SettingPage";
import UserConfig from "pages/Admin/config/UserConfig";
import AddNewFilm from "pages/Admin/films/AddNewFilm";
import CreateNewShowtimes from "pages/Admin/films/CreateNewShowtimes";
import FilmList from "pages/Admin/films/FilmList";


import TicketList from "pages/Admin/ticket/TicketList";
import ListUserPage from "pages/Admin/user/ListUserPage";
import UserAuthorizationPage from "pages/Admin/user/UserAuthorizationPage";
const routesAdmin = [
  {
    path: "/admin/home",
    element: AdminHomePage,
  },
  {
    path: "/admin/thong-tin-tai-khoan",
    element: UserConfig ,
  },
  {
    path: "/admin/danh-sach-nguoi-dung",
    element: ListUserPage,
  },
  {
    path: "/admin/phan-quyen-nguoi-dung",
    element: UserAuthorizationPage,
  },
  {
    path: "/admin/danh-sach-phong-ve",
    element: TicketList,
  },
  {
    path: "/admin/danh-sach-phim",
    element: FilmList,
  },
  {
    path: "/admin/tao-moi-phim",
    element: AddNewFilm,
  },
  {
    path: "/admin/tao-lich-chieu",
    element: CreateNewShowtimes,
  },
  {
    path: "/admin/them-moi-cum-rap",
    element: AddNewCinema,
  },
  {
    path: "/admin/danh-sach-cum-rap",
    element: CinemaList,
  },
  {
    path: "/admin/cai-dat-he-thong",
    element: SettingPage,
  },
];
export default routesAdmin;

import AdminHomePage from "pages/Admin/AdminHomePage";
import AddNewCinema from "pages/Admin/cinema/AddNewCinema";
import CinemaList from "pages/Admin/cinema/CinemaList";
import SettingPage from "pages/Admin/config/SettingPage";
import UserConfig from "pages/Admin/config/UserConfig";
import AddNewFilm from "pages/Admin/films/AddNewFilm";
import ChooseInforFilms from "pages/Admin/films/ChooseInforFilms";
import CreateNewShowtimes from "pages/Admin/films/CreateNewShowtimes";
import FilmList from "pages/Admin/films/FilmList";
import ChooseInforTicket from "pages/Admin/ticket/ChooseInforTicket";
import TicketList from "pages/Admin/ticket/TicketList";
import ChooseInforUser from "pages/Admin/user/ChooseInforUser";

// import TicketList from "pages/Admin/ticket/TicketList";
import ListUserPage from "pages/Admin/user/ListUserPage";
const routesAdmin = [
  {
    path: "/admin/home",
    element: AdminHomePage,
  },
  {
    path: "/admin/thong-tin-tai-khoan",
    element: UserConfig,
  },
  {
    path: "/admin/danh-sach-nguoi-dung",
    element: ChooseInforUser,
  },
  {
    path: "/admin/danh-sach-phong-ve",
    element: ChooseInforTicket,
  },
  {
    path: "/admin/danh-sach-phim",
    element: ChooseInforFilms,
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

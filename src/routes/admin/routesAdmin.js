import AdminHomePage from "pages/Admin/AdminHomePage";
import AddNewCinema from "pages/Admin/cinema/AddNewCinema";
import CinemaList from "pages/Admin/cinema/CinemaList";
import SettingPage from "pages/Admin/config/SettingPage";
import UserConfig from "pages/Admin/config/UserConfig";
import AddNewFilm from "pages/Admin/films/AddNewFilm";
import ChooseInforFilms from "pages/Admin/films/ChooseInforFilms";
import CreateNewShowtimes from "pages/Admin/films/CreateNewShowtimes";
import ChooseInforTicket from "pages/Admin/ticket/ChooseInforTicket";
import ChooseInforUser from "pages/Admin/user/ChooseInforUser";
const routesAdmin = [
  {
    path: "home",
    element: AdminHomePage,
  },
  {
    path: "thong-tin-tai-khoan",
    element: UserConfig,
  },
  {
    path: "danh-sach-nguoi-dung",
    element: ChooseInforUser,
  },
  {
    path: "danh-sach-phong-ve",
    element: ChooseInforTicket,
  },
  {
    path: "danh-sach-phim",
    element: ChooseInforFilms,
  },
  {
    path: "tao-moi-phim",
    element: AddNewFilm,
  },
  {
    path: "tao-lich-chieu",
    element: CreateNewShowtimes,
  },
  {
    path: "them-moi-cum-rap",
    element: AddNewCinema,
  },
  {
    path: "danh-sach-cum-rap",
    element: CinemaList,
  },
  {
    path: "cai-dat-he-thong",
    element: SettingPage,
  },
];
export default routesAdmin;

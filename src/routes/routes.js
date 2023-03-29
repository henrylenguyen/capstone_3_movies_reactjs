import HomePage from "pages/HomePage";
import SignUpPage from "pages/SignUpPage";
import SignInPage from "pages/SignInPage.jsx";
import BookingPage from "pages/BookingPage";
import DetailsPage from "pages/DetailsPage.jsx";

import UserPage from "pages/UserPage";
import SeatPage from "pages/SeatPage";
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
import ContainerLayout from "layouts/admin/home/ContainerLayout";

import LoginPage from "pages/Admin/LoginPage";
const routes = [
  {
    path: "/",
    component: HomePage,
    children: [
      {
        index: true,
        component: BookingPage,
      },
      {
        path: "/user-info",
        component: UserPage,
      },
      {
        path: "/detail/:movieId",
        component: DetailsPage,
      },

      {
        path: "/seats/:scheduleId",
        component: SeatPage,
      },
      {
        path: "/signIn",
        component: SignInPage,
      },
      {
        path: "/signUp",
        component: SignUpPage,
      },
    ],
  },
  {
    path: "/admin",
    component: ContainerLayout,
    children: [
      {
        path: "/admin/home",
        component: AdminHomePage,
      },

      {
        path: "/admin/thong-tin-tai-khoan",
        component: UserConfig,
      },
      {
        path: "/admin/danh-sach-nguoi-dung",
        component: ChooseInforUser,
      },
      {
        path: "/admin/danh-sach-phong-ve",
        component: ChooseInforTicket,
      },
      {
        path: "/admin/danh-sach-phim",
        component: ChooseInforFilms,
      },
      {
        path: "/admin/tao-moi-phim",
        component: AddNewFilm,
      },
      {
        path: "/admin/tao-lich-chieu",
        component: CreateNewShowtimes,
      },
      {
        path: "/admin/them-moi-cum-rap",
        component: AddNewCinema,
      },
      {
        path: "/admin/danh-sach-cum-rap",
        component: CinemaList,
      },
      {
        path: "/admin/cai-dat-he-thong",
        component: SettingPage,
      },
    ],
  },
  {
    path: "/admin/login",
    component: LoginPage,
  },
];
export default routes;

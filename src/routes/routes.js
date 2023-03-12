import HomePage from "pages/HomePage";
import SignUpPage from "pages/SignUpPage";
import SignInPage from "pages/SignInPage.jsx";
import BookingPage from "pages/BookingPage";
import DetailsPage from "pages/DetailsPage.jsx";
import NewsPage from "pages/NewsPage.jsx";
import UserPage from "pages/UserPage";
import SeatPage from "pages/SeatPage";

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
        path: "/news",
        component: NewsPage,
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
];
export default routes;

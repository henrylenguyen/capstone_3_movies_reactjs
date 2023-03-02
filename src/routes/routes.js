import HomePage from "pages/HomePage";
import SignUpPage from "pages/SignUpPage";
import SignInPage from "pages/SignInPage.jsx";
import BookingPage from "pages/BookingPage";
import DetailsPage from "pages/DetailsPage.jsx";
import NewsPage from "pages/NewsPage.jsx";

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
        path: "/detail/:movieId",
        component: DetailsPage,
      },
      {
        path: "/news",
        component: NewsPage,
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

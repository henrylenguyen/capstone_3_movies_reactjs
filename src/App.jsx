import PageNotFound from "pages/NotFoundPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import routes from "routes/routes";
import { fetchProfile } from "thunks/userThunk";
import routesAdmin from "routes/admin/routesAdmin";
import bgError from "assets/images/error.png";
import LoginPage from "pages/Admin/LoginPage";
import ContainerLayout from "layouts/admin/home/ContainerLayout";
import { fetchLayThongTinTaiKhoan } from "thunks/admin/userThunks";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchLayThongTinTaiKhoan());
  }, []);

  const params = window.location.pathname;
  const isAdmin = params.startsWith("/admin");

  return (
    <>
      {isAdmin ? (
        <Routes>
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<ContainerLayout />}>
            {routesAdmin.map(({ path, element: Element }, index) => (
              <Route key={index} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <Routes>
          {routes.map(({ path, component: Component, children }, idx) => (
            <Route key={idx} path={path} element={<Component />}>
              {children?.map(({ path, component: Component, index }, idx) => (
                <Route
                  key={idx}
                  index={index}
                  path={path}
                  element={<Component />}
                />
              ))}
            </Route>
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;

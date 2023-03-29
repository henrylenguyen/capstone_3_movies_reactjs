import PageNotFound from "pages/NotFoundPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "routes/routes";
import { fetchProfile } from "thunks/userThunk";
import routesAdmin from "routes/admin/routesAdmin";
import bgError from "assets/images/error.png";
import LoginPage from "pages/Admin/LoginPage";
import ContainerLayout from "layouts/admin/home/ContainerLayout";
import { fetchLayThongTinTaiKhoan } from "thunks/admin/userThunks";

function App() {
  const dispatch = useDispatch();
const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchLayThongTinTaiKhoan());
  }, []);
  const params = window.location.pathname;
  return (
    <>
     {params === "/" ? (
      <Routes>
        {/* <Route>Route này để navbar hoặc header</Route> */}
        {routes?.map(({ path, component: Component, children }, idx) => {
          return (
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
          );
        })}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>):params === "/admin" ?(
      <div className="w-full h-screen">
        <div className="xl:hidden relative h-full flex justify-center items-center">
          <img src={bgError} alt="background" className="object-cover h-full" />
          <h2 className="absolute inline-block bg-red-700 p-5 rounded-xl text-white text-[18px] font-bold uppercase text-center">
            Chúng tôi hiện chưa hỗ trợ trên thiết bị này!
          </h2>
        </div>
        <div className="hidden xl:block h-full overflow-y-auto">
          <Routes>
            <Route path={"/admin"} element={<ContainerLayout></ContainerLayout>}>
              {routesAdmin?.map(({ path, element: Element, slug }, index) => (
                <Route key={index} path={path} element={<Element />}>
      
                </Route>
              ))}
            </Route>
            <Route path="/admin/login" element={<LoginPage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </div>):""}
    </>
  );
}

export default App;

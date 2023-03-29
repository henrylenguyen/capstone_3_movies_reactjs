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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXp_-yPlQFR1Hj4KqFJHl06bsY_tBdgsk",
  authDomain: "movietheater-e6e7a.firebaseapp.com",
  projectId: "movietheater-e6e7a",
  storageBucket: "movietheater-e6e7a.appspot.com",
  messagingSenderId: "757041044584",
  appId: "1:757041044584:web:bdec16fa9dfdb3d26eafdd",
  measurementId: "G-DBX22PFJKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const dispatch = useDispatch();

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

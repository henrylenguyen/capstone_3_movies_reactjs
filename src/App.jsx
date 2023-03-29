import PageNotFound from "pages/NotFoundPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "routes/routes";
import { fetchProfile } from "thunks/userThunk";

import { fetchLayThongTinTaiKhoan } from "thunks/admin/userThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchLayThongTinTaiKhoan());
  }, []);
  return (
    <>
      <Routes>
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
      </Routes>
    </>
  );
}

export default App;

import PageNotFound from "pages/NotFoundPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import routes from "routes/routes";
import { fetchProfile } from "thunks/userThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
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
    </Routes>
  );
}

export default App;

import PageNotFound from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      {/* <Route>Route này để navbar hoặc header</Route> */}
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  );
}

export default App

import PageNotFound from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import routesAdmin from "routes/admin/routesAdmin";
import bgError from "assets/images/error.png";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="md:hidden relative h-full flex justify-center items-center">
        <img src={bgError} alt="background" className="object-cover h-full" />
        <h2 className="absolute inline-block bg-red-700 p-5 rounded-xl text-white text-[18px] font-bold uppercase text-center">Chúng tôi hiện chưa hỗ trợ trên thiết bị này!</h2>
      </div>
      <div className="hidden md:block h-full">
        <Routes>
          {routesAdmin?.map(({ path, element: Element }, index) => (
            <Route key={index} path={path} element={<Element />}></Route>
          ))}
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App

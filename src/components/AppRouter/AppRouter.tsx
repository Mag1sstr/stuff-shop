import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default AppRouter;

import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import SingleProduct from "../../pages/SingleProduct/SingleProduct";
import { ROUTES } from "../../utils/routes";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={`${ROUTES.PRODUCTS}/:id`} element={<SingleProduct />} />
    </Routes>
  );
}

export default AppRouter;

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import SingleProduct from "../../pages/SingleProduct/SingleProduct";
import { ROUTES } from "../../utils/routes";
import Cart from "../../pages/Cart/Cart";
import CategoryProducts from "../../pages/CategoryProducts/CategoryProducts";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={`${ROUTES.PRODUCTS}/:id`} element={<SingleProduct />} />
      <Route path={`${ROUTES.CATEGORIES}/:id`} element={<CategoryProducts />} />
      <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
  );
}

export default AppRouter;

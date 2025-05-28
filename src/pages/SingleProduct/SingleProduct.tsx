import { useParams } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import Products from "../../components/Products/Products";
import SingleProductBanner from "./SingleProductBanner/SingleProductBanner";
import { useGetSingleProductQuery } from "../../api/api";

function SingleProduct() {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id!);

  return (
    <section>
      <Menu
        banner={<SingleProductBanner {...product!} isLoading={isLoading} />}
      />
      <Products />
    </section>
  );
}

export default SingleProduct;

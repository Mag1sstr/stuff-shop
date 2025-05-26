import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

function SingleProduct() {
  const { id } = useParams();

  return (
    <section>
      <div className="container menu">
        <Sidebar />
        {/* <Cart /> */}
      </div>
    </section>
  );
}

export default SingleProduct;

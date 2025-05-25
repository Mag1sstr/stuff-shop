import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();

  return (
    <section>
      <div className="container">
        <h1>Single</h1>
      </div>
    </section>
  );
}

export default SingleProduct;

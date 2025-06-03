import { useParams } from "react-router-dom";
import styles from "./CategoryProducts.module.scss";
import { useGetProductsByCategoryQuery } from "../../api/api";
import Spinner from "../../components/Spinner/Spinner";
import Card from "../../components/Products/Card/Card";
function CategoryProducts() {
  const { id } = useParams();

  const {
    data: products,
    isLoading,
    isSuccess,
  } = useGetProductsByCategoryQuery(id!);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          {isLoading && <Spinner center />}

          {isSuccess && !!products.length && (
            <>
              <h2 className={styles.title}>{products![0].category.name}</h2>
              <div className={styles.row}>
                {products?.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
              </div>
            </>
          )}

          {isSuccess && !products.length && (
            <div className={styles.error}>Not found</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CategoryProducts;

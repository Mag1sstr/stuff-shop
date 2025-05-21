import { useGetProductsQuery } from "../../api/api";
import Card from "./Card/Card";
import styles from "./Products.module.scss";

interface IProps {
  title?: string;
}

function Products({ title = "Products" }: IProps) {
  const { data: products } = useGetProductsQuery({});
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.row}>
            {products?.slice(0, 5).map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

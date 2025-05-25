import { useState } from "react";
import { useGetProductsQuery } from "../../api/api";
import type { ICategories, IProducts } from "../../types/interfaces";
import Button from "../Button/Button";
import Card from "./Card/Card";
import styles from "./Products.module.scss";
import Pagination from "../Pagination/Pagination";
import Filters from "./Filters/Filters";
import { useDebouce } from "../../utils/useDebounce";

interface IProps {
  title?: string;
  data?: IProducts[] | ICategories[];
}

function Products({ title = "Products" }: IProps) {
  const [more, setMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState({
    title: "",
    price_min: "1",
    price_max: "",
  });

  const { data: products } = useGetProductsQuery({
    title: useDebouce(params.title),
    price_min: useDebouce(params.price_min),
    price_max: useDebouce(params.price_max),
  });

  const pageSize = 10;
  const totalPages = products ? Math.ceil(products.length / pageSize) : 1;
  const startIndex = currentPage * pageSize - pageSize;
  const endIndex = startIndex + pageSize;
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          <Filters params={params} setParams={setParams} />
          <div className={styles.row}>
            {products
              ?.slice(more ? startIndex : 0, more ? endIndex : 5)
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>
          {!more && (
            <div className={styles.btn}>
              <Button onClick={() => setMore(true)} title="See more" />
            </div>
          )}
          {more && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;

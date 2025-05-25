import type { Dispatch, SetStateAction } from "react";
import styles from "./Filters.module.scss";

interface IProps {
  params: { title: string; price_min: string; price_max: string };
  setParams: Dispatch<
    SetStateAction<{ title: string; price_min: string; price_max: string }>
  >;
}

function Filters({ params, setParams }: IProps) {
  const reset = () => {
    setParams({ title: "", price_min: "1", price_max: "" });
  };

  return (
    <div className={styles.filters}>
      <div className={styles.item}>
        <input
          value={params.title}
          onChange={(e) => setParams({ ...params, title: e.target.value })}
          type="text"
          placeholder="Product name"
        />
      </div>
      <div className={styles.item}>
        <input
          value={params.price_min}
          onChange={(e) =>
            setParams({
              ...params,
              price_min: !e.target.value.length ? "1" : e.target.value,
            })
          }
          type="number"
        />
        <div className={styles.title}>Price from</div>
      </div>
      <div className={styles.item}>
        <input
          value={params.price_max}
          onChange={(e) => setParams({ ...params, price_max: e.target.value })}
          type="number"
        />
        <div className={styles.title}>Price to</div>
      </div>

      <button
        onClick={reset}
        className={`${styles.btn} ${
          params.title.length || params.price_max.length ? styles.open : ""
        }`}
      >
        Reset
      </button>
    </div>
  );
}

export default Filters;

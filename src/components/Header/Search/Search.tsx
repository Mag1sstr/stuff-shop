import styles from "./Search.module.scss";
import search from "../../../images/header/search.svg";
import type { IProducts } from "../../../types/interfaces";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  data: IProducts[];
}

function Search({ searchValue, setSearchValue, data }: IProps) {
  return (
    <div className={styles.search}>
      <img src={search} alt="" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Search for anything..."
      />
      <div className={`${styles.drop} ${searchValue.trim() && styles.open}`}>
        {data?.length ? (
          data.map(({ images, title, category, id }) => (
            <Link
              key={id}
              onClick={() => setSearchValue("")}
              to={ROUTES.PRODUCTS + `/${id}`}
            >
              <div className={styles.item}>
                <div className={styles.row}>
                  <img className={styles.img} src={images[0]} alt="" />
                  <div>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.category}>{category.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>Not found</div>
        )}
      </div>
    </div>
  );
}

export default Search;

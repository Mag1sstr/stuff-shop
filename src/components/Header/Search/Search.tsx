import styles from "./Search.module.scss";
import search from "../../../images/header/search.svg";

function Search() {
  return (
    <div className={styles.search}>
      <img src={search} alt="" />
      <input
        className={styles.input}
        type="text"
        placeholder="Search for anything..."
      />
    </div>
  );
}

export default Search;

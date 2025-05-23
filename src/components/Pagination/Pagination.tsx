import styles from "./Pagination.module.scss";

interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

function Pagination({ totalPages, currentPage, setCurrentPage }: IProps) {
  return (
    <div className={styles.row}>
      {[...Array(totalPages)].map((_, i) => (
        <div
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`${styles.page} ${currentPage === i + 1 && styles.active}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default Pagination;

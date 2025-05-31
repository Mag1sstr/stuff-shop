import Button from "../Button/Button";
import styles from "./Poster.module.scss";
function Poster() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.poster}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              NEW YEAR <br /> <span>SALE</span>
            </h2>
            <div className={styles.btn}>
              <Button>See more</Button>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.text}>
              save up to <span>50%</span> off
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poster;

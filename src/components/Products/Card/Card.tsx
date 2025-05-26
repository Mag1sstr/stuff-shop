import { Link } from "react-router-dom";
import type { IProducts } from "../../../types/interfaces";
import styles from "./Card.module.scss";
import { ROUTES } from "../../../utils/routes";

function Card({ title, category, price, images, id }: IProducts) {
  return (
    <Link to={ROUTES.PRODUCTS + `/${id}`}>
      <div className={styles.card}>
        <div>
          <div className={styles.img__wrapper}>
            <img className={styles.img} src={images[0]} alt="" />
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.category}>{category.name}</p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.price}>{price}$</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;

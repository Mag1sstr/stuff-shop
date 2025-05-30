import Button from "../../../components/Button/Button";
import { useAppSelector } from "../../../store/store";
import styles from "./CartBanner.module.scss";

function CartBanner() {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <div className={styles.banner}>
      <div>
        <h3>Your cart</h3>

        <div className={styles.col}>
          {cart.map(({ title, price, count, category, images, id }) => (
            <div key={id} className={styles.item}>
              <div className={styles.info}>
                <img src={images[0]} alt="" />
                <div>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.category}>{category.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <p>
          TOTAL PRICE: <span>198$</span>
        </p>
        <Button title="Proceed to checkout" />
      </div>
    </div>
  );
}

export default CartBanner;

import { useState } from "react";
import type { IProducts } from "../../../types/interfaces";
import styles from "./SingleProductBanner.module.scss";
import Button from "../../../components/Button/Button";
import Spinner from "../../../components/Spinner/Spinner";
import { useAppDispatch } from "../../../store/store";
import { addCartItem } from "../../../store/slices/cartSlice";

interface IProps extends IProducts {
  isLoading: boolean;
}

function SingleProductBanner({
  images,
  title,
  description,
  price,
  category,
  isLoading,
  id,
}: IProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addCartItem({ title, images, description, category, id, count: 1 })
    );
  };
  return (
    <div className={styles.banner}>
      {isLoading ? (
        <Spinner center />
      ) : (
        <div className={styles.row}>
          <div className={styles.img__block}>
            <img className={styles.img} src={images[currentImage]} alt="" />
            <div className={styles.col}>
              {images.map((img, index) => (
                <img
                  onClick={() => setCurrentImage(index)}
                  className={styles.item}
                  src={img}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>{price}$</p>
            <p className={styles.feature}>
              Category: <span>{category.name}</span>
            </p>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttons}>
              <Button onClick={handleAddToCart} title="Add to cart" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProductBanner;

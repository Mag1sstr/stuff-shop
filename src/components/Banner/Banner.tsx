import styles from "./Banner.module.scss";
import bannerImg from "../../images/banner.png";
import Button from "../Button/Button";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.sale}>BIG SALE 20%</div>
      <div className={styles.block}>
        <p className={styles.text}>the bestseller of 2022 </p>
        <h1 className={styles.title}>
          LENNON r2d2 <br /> with NVIDIA 5090 TI
        </h1>

        <Button>Shop Now</Button>
      </div>
      <img className={styles.img} src={bannerImg} alt="banner" />
    </section>
  );
}

export default Banner;

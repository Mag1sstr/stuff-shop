import Menu from "../../components/Menu/Menu";
import styles from "./Cart.module.scss";
import CartBanner from "./CartBanner/CartBanner";

function Cart() {
  return (
    <section>
      <Menu banner={<CartBanner />} />
    </section>
  );
}

export default Cart;

import Sidebar from "../Sidebar/Sidebar";
import styles from "./Menu.module.scss";

interface IProps {
  banner: React.ReactNode;
}

function Menu({ banner }: IProps) {
  return (
    <div className="container">
      <section className={styles.menu}>
        <Sidebar />
        {banner}
      </section>
    </div>
  );
}

export default Menu;

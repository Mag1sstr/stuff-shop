import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../images/logo.svg";
import avatar from "../../images/header/avatar.svg";
import search from "../../images/header/search.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="logo" />
          </Link>
          <div className={styles.info}>
            <div className={styles.user}>
              <div
                className={styles.avatar}
                style={{ backgroundImage: `url(${avatar})` }}
              />
              <div className={styles.name}>Daniil K.</div>
            </div>
            <div className={styles.search}>
              <img src={search} alt="" />
              <input
                className={styles.input}
                type="text"
                placeholder="Search for anything..."
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

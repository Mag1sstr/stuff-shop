import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import github from "../../images/footer/github.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <Logo width={61} />
          <p className={styles.text}>
            Developed by <span>Karachev</span>
          </p>
          <a
            href="https://github.com/Mag1sstr?tab=overview&from=2025-05-01&to=2025-05-20"
            target="_blank"
          >
            <img style={{ width: 28 }} src={github} alt="github" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

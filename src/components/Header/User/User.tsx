import styles from "./User.module.scss";
import avatar from "../../../images/header/avatar.svg";

function User() {
  return (
    <div className={styles.user}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className={styles.name}>Daniil K.</div>
    </div>
  );
}

export default User;

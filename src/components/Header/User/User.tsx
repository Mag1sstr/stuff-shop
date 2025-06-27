import styles from "./User.module.scss";
import avatar from "../../../images/header/avatar.svg";
import icon from "../../../images/header/user-icon.svg";

interface IProps {
  onClick?: () => void;
}

function User({ onClick }: IProps) {
  return (
    <div onClick={onClick} className={styles.user}>
      <img className={styles.icon} src={icon} alt="user" />

      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className={styles.name}>Daniil K.</div>
    </div>
  );
}

export default User;

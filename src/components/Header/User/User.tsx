import styles from "./User.module.scss";
import avatar from "../../../images/header/avatar.svg";

interface IProps {
  onClick?: () => void;
}

function User({ onClick }: IProps) {
  return (
    <div onClick={onClick} className={styles.user}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className={styles.name}>Daniil K.</div>
    </div>
  );
}

export default User;

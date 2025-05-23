import styles from "./Button.module.scss";

interface IProps {
  title: string;
  onClick?: () => void;
}

function Button({ title, onClick }: IProps) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {title}
    </button>
  );
}

export default Button;

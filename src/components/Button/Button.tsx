import styles from "./Button.module.scss";

interface IProps {
  title: string;
  onClick?: () => void;
  fontWeight?: number;
  width?: string | number;
}

function Button({ title, onClick, fontWeight = 600, width }: IProps) {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      style={{ fontWeight, width }}
    >
      {title}
    </button>
  );
}

export default Button;

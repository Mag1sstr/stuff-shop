import styles from "./Button.module.scss";

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  fontWeight?: number;
  width?: string | number;
}

function Button({ children, onClick, fontWeight = 600, width }: IProps) {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      style={{ fontWeight, width }}
    >
      {children}
    </button>
  );
}

export default Button;

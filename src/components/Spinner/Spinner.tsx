import styles from "./Spinner.module.scss";

interface IProps {
  center?: boolean;
}

function Spinner({ center }: IProps) {
  return (
    <span className={`${styles.loader} ${center && styles.center}`}></span>
  );
}

export default Spinner;

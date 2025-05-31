import Button from "../Button/Button";
import styles from "./AuthModal.module.scss";

interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
}

function AuthModal({ open, setOpen }: IProps) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`${styles.wrapper} ${open && styles.open}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <svg
          onClick={() => setOpen(false)}
          className={styles.close}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.375 4.375L15.625 15.625"
            stroke="#576067"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.375 15.625L15.625 4.375"
            stroke="#576067"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className={styles.title}>Register</h2>
        <div className={styles.inputs}>
          <input className={styles.input} type="text" placeholder="Username" />
          <input className={styles.input} type="text" placeholder="E-mail" />
          <input className={styles.input} type="text" placeholder="Password" />
        </div>
        <Button fontWeight={500} width="100%">
          Create an account
        </Button>
      </div>
    </div>
  );
}

export default AuthModal;

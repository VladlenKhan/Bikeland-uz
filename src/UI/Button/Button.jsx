import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.block}>
      <div className={styles.button}>
        <a href="#" className={styles.button__text}>
          Загрузить еще
        </a>
      </div>
    </div>
  );
};

export default Button;

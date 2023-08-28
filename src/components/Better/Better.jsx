import styles from "./Better.module.css";

const Better = () => {
  return (
    <div className={styles.container}>
    <div className={styles.advantages}>
      <div className={styles.block}>
        <div className={styles.block__img}>
          <img src="/hand.svg" alt="icon" />
        </div>
        <div className={styles.block__text}>
          <p className={styles.block__title}>Опыт</p>
          <p className={styles.block__subtitle}>На рынке Узбекистана</p>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.block__img}>
          <img src="/moto.svg" alt="icon" />
        </div>
        <div className={styles.block__text}>
          <p className={styles.block__title}>Профессионализм</p>
          <p className={styles.block__subtitle}>
            40+ Моделей Мото-техники в наличии
          </p>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.block__img}>
          <img src="/shield.png" alt="icon"  />
        </div>
        <div className={styles.block__text}>
          <p className={styles.block__title}>Доверие</p>
          <p className={styles.block__subtitle}>
            3000+ Счастливых обладателей <br /> нашей Мото-техники
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Better;
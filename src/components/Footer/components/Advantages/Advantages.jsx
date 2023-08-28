import styles from "./Advantages.module.css";

const Advantages = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__item}>
        <div className={styles.block__img}>
          <img src="/handwhite.svg" alt="icon" />
        </div>
        <div className={styles.block__title}>Опыт</div>
        <div className={styles.block__subtitle}>На рынке Узбекистана</div>
      </div>
      <div className={styles.block__item}>
        <div className={styles.block__img}>
          <img src="/motowhite.svg" alt="icon" />
        </div>
        <div className={styles.block__title}>Профессионализм</div>
        <div className={styles.block__subtitle}>40+ Моделей Мото-техники в наличии</div>
      </div>
      <div className={styles.block__item}>
        <div className={styles.block__img}>
          <img src="/shieldwhite.png" alt="icon" />
        </div>
        <div className={styles.block__title}>Доверие</div>
        <div className={styles.block__subtitle}>3000+ Счастливых обладателей <br />
нашей Мото-техники</div>
      </div>
    </div>
  );
};

export default Advantages;

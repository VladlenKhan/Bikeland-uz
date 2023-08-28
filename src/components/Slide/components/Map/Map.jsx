import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__title}>
    
        <span className={styles.block__title_red}>Ташкент</span>
        <span className={styles.block__title_black}>
          Адрес: г.Ташкент, Ул. Янги Сергели
        </span>
      </div>
      <div>
        <p className={styles.block__text}>
          Ориентир: <br />
          Не доезжая моста Узгариш по дороге с Южного вокзала на <br /> Сергели
          АвтоБазар.
        </p>
        <p className={styles.block__text}>Телефон: +998555006001</p>
        <div className={styles.block__img}>
            <img src="/map.png"  alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Map;

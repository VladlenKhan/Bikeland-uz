import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Обратный звонок</div>
      <div className={styles.wrapper}>
        <div className={styles.block1}>
          <div className={styles.block1__bg}>
            <div className={styles.block1__logo}>
              <img src="/bikelandbiglogo.png" alt="logo" />
            </div>
          </div>
          <div className={styles.block1__text}>
            Хает Хидоятов, создатель Bikeland.uz вдохновивший <br />
            тысячи мотолюбителей со всего Узбекистана и СНГ
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.block2__title}>
            Вы можете заказать обратный звонок <br />и мы перезвоним Вам сами
          </div>
          <form className={styles.block2__form}>
            <div className={styles.item}>
            <div className={styles.block2__elem}>
              <label htmlFor="1">Как к вам обращаться?</label>
              <input type="text" id="1" placeholder="Введите имя"/>
            </div>
            <div className={styles.block2__elem}>
              <label htmlFor="2">На какой номер вам перезвонить?</label>
              <input type="text" id="2" placeholder="Введите номер +998" />
            </div>
            <div className={styles.block2__elem}>
              <label htmlFor="3">Ваш город или регион?</label>
              <input type="text" id="3" placeholder="Название города, региона" />
            </div>
            </div>
           
            <div className={styles.item2}>

              <p className={styles.item2__text}>Откуда узнали о нас?</p>
              <div className={styles.item2__block}>
                <div className={styles.item2__elem}>
                <label htmlFor="4">
                  <input type="checkbox" id="4" />
                  Посоветовали друзья
                </label>
                <label htmlFor="5">
                  <input type="checkbox" id="5" />
                  Посетил шоурум
                </label>
                </div>
                <div className={styles.item2__elem}>
                <label htmlFor="6">
                  <input type="checkbox" id="6" />
                  YouTube
                </label>
                <label htmlFor="7">
                  <input type="checkbox" id="7" />
                  Telegram
                </label>
                </div>
                <div className={styles.item2__elem}>
                <label htmlFor="8">
                  <input type="checkbox" id="8" />
                  Instagram
                </label>
                <label htmlFor="9">
                  <input type="checkbox" id="9" />
                  Facebook
                </label>
                </div>
              </div>
            </div>
            <div className={styles.button}>
           <a href="#" className={styles.button__link}>Заказать звонок</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

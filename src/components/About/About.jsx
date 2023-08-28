import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Почему нужно выбрать Bikeland.uz?</div>
        <div className={styles.subtitle}>
          В качестве доверенного бренда для покупки мотоцикла или его
          комплектующих
        </div>
        <div className={styles.block}>
          <div className={styles.block__elem}>
            <div className={styles.block__img}>
              <img src="/human.svg" alt="icon" />
            </div>
            <div className={styles.block__text}>
              Наша первостепенная цель - <span className={styles.bold}> КАЧЕСТВО! </span> Качество, превыше всего!
            </div>
            <hr />
            <div className={styles.block__desc}>
              Все продаваемые модели испытываем сами. Гарантируем до 2000 км
              пробега на коробку и трансмиссию.
            </div>
          </div>
          <div className={styles.block__elem}>
            <div className={styles.block__img}>
              <img src="/human.svg" alt="icon" />
            </div>
            <div className={styles.block__text}>
            <span className={styles.bold}> Сервисная поддержка  </span> для клиентов. Штатные мастера
            </div>
            <hr />
            <div className={styles.block__desc}>
              После покупки останемся на связи с Вами, для консультации и
              ответов на возникшие вопросы 7 дней в неделю
            </div>
          </div>
          <div className={styles.block__elem}>
            <div className={styles.block__img}>
              <img src="/kargo.svg" alt="icon" />
            </div>
            <div className={styles.block__text}>
              Доставка в <span className={styles.bold}>любую точку Узбекистана</span>  до вашего города или дома
            </div>
            <hr />
            <div className={styles.block__desc}>
            Доставим куда угодно по Узбекистану от 150 000 сум. Проконтролируем весь путь вашего мото-транспорта от нас до Вас
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

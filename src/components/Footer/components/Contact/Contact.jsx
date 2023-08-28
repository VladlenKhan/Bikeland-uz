import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.block}>
      <div className={styles.item1}>
        <div className={styles.item1__title}>
          Принимаем оплату: <br />
           Наличными, через банковский перевод или через
          платежные системы
        </div>
        <div className={styles.item1__payments}>
            <div><img src="/payme1.png" alt="icon" /></div>
            <div><img src="/apelsin1.png" alt="icon" /></div>
            <div><img src="/click1.png" alt="icon" /></div>
        </div>
      </div>
      <div className={styles.item2}>
        <div className={styles.item2__title}>Контакты для связи:</div>
        <div className={styles.item2__text}>
          <div>
            <img src="/phonemin.svg" alt="icon" />
          </div>
          <div>
          
            <a href="tel:+998555006001"> +998555006001 </a> 
          </div>
        </div>
        <div className={styles.item2__text}>
          <div>
            <img src="/phonemin.svg" alt="icon" />
          </div>
          <div>
          
            <a href="tel:+998936216001"> +998936216001 </a> 
          </div>
        </div>
        <div className={styles.item2__text}>
          <div>
            <img src="/mailmin.svg" alt="icon" />
          </div>
          <div>
          
            <a href="mailto:info@bikeland.uz">info@bikeland.uz </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

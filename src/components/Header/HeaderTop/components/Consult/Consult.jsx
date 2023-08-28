import styles from './Consult.module.css';

const Consult = () => {
    return ( 
        <div className={styles.block}>
            <div className={styles.block__img}>
                <img src="/tel.svg" alt="icon" />
            </div>
            <div>
                <p className={styles.block__text}>консультант на связи 24/7</p>
            </div>
        </div>
     );
}
 
export default Consult;
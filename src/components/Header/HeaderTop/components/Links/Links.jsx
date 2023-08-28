import styles from './Links.module.css';

const Links = () => {
    return ( 
        <div className={styles.links}>
            <a href='#' className={styles.links__item}> 
                <img src="/facebook.svg" alt="icon" />
            </a>
            <a href='#' className={styles.links__item}>
                <img src="/instagram.svg" alt="icon" />
            </a>
            <a href='#' className={styles.links__item}>
                <img src="/youtube.svg" alt="icon" />
            </a>
            <a href='#' className={styles.links__item}>
                <img src="/telegram.svg" alt="icon" />
            </a>
        </div>
     );
}
 
export default Links;
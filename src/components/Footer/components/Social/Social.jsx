import styles from './Social.module.css';

const Social = () => {
    return ( 
        <div className={styles.block}>
            <a href='#' className={styles.link}>
                <img src="/telegrambig.svg" alt="" />
                
            </a>
            <a href='#' className={styles.link}>
                <img src="/instagrambig.svg" alt="" />
                
            </a>
            <a href='#' className={styles.link}>
                <img src="/facebookbig.svg" alt="" />
                
            </a>
            <a href='#' className={styles.link}>
                <img src="/youtubebig.svg" alt="" />
                
            </a>
        </div>
     );
}
 
export default Social;
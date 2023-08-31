import styles from './Article.module.css'

const Article = () => {
    return (
        <div className={styles.block}>
            <div className={styles.block__bg}>
            </div>
            <div className={styles.block__text}>
            <div className={styles.block__title}>Название статьи</div>
            <div className={styles.block__desc}>Аэродинамический обвес Superleggera превосходит не только доступные опции для Panigale V4 и V4 R, но и даже ...</div>
            </div>
        </div>
      );
}
 
export default Article;
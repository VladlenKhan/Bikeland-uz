import styles from './List.module.css';

const List = () => {
    return (
        <ul className={styles.block}>
            <div className={styles.block__item1}>
            <li className={styles.block__item}><a href="#">МОТОЦИКЛЫ</a></li>
            <li className={styles.block__item}><a href="#">СКУТЕРЫ</a></li>
            <li className={styles.block__item}><a href="#">МОПЕДЫ</a></li>
            <li className={styles.block__item}><a href="#">ЭЛЕКТРОСКУТЕРЫ</a></li>  
            <li className={styles.block__item}><a href="#">ТРИЦИКЛЫ</a></li>  
            <li className={styles.block__item}><a href="#">МИНИ БАЙКИ</a></li>  
            <li className={styles.block__item}><a href="#">ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ</a></li>  
            </div>
            <div className={styles.block__item2}>     
            <li className={styles.block__item}><a href="#">КВАДРОЦИКЛЫ</a></li>
            <li className={styles.block__item}><a href="#">ДВИГАТЕЛИ</a></li>  
            <li className={styles.block__item}><a href="#">ДИЛЕРЫ</a></li>  
            <li className={styles.block__item}><a href="#">ДОСТАВКА</a></li>  
            <li className={styles.block__item}><a href="#">БЛОГ</a></li>  
            <li className={styles.block__item}><a href="#">РАБОТА У НАС</a></li>  
            </div>
        </ul>
      );
}
 
export default List;
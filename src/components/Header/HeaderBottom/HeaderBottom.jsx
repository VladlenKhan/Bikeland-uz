import { Link } from 'react-router-dom';
import styles from './HeaderBottom.module.css';

const HeaderBottom = () => {
    return (
        <div className={styles.headerBottom}>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                <li> <a href="#"> МОТОЦИКЛЫ </a></li>
                <li> <a href="#"> СКУТЕРЫ </a></li>
                <li> <a href="#"> МОПЕДЫ </a></li>
                <li> <a href="#"> ЭЛЕКТРОСКУТЕРЫ </a></li>
                <li> <a href="#"> ТРИЦИКЛЫ </a></li>
                <li> <a href="#"> МИНИ БАЙКИ </a></li>
                <li> <a href="#"> КВАДРОЦИКЛЫ </a></li>
                <li> <a href="#"> ДВИГАТЕЛИ </a></li>
                <li> <a href="#"> ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ </a></li>
                <li> <Link to="/dilers"> ДИЛЕРЫ </Link></li>
                <li> <Link to="/post"> ДОСТАВКА </Link></li>
                </ul>
            </div>
        </div>
      );
}
 
export default HeaderBottom;
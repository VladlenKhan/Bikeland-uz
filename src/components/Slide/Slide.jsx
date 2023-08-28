import { Map } from './components'
import styles from './Slide.module.css';

const Slide = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>
            НАШИ ШОУРУМЫ
            </div>
            <div className={styles.wrapper}>
            <Map/>
            <Map/>
            </div>
        </div>
     );
}
 
export default Slide;
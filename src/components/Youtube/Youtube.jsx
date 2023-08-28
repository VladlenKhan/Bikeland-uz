import { Block1,Block2 } from './components';
import styles from './Youtube.module.css';

const Youtube = () => {
    return ( 
        <div className={styles.block}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <Block1/>
                    </div>
                    <div>
                        <Block2/>
                    </div>
                  
                </div>
            </div>
        </div>
     );
}
 
export default Youtube;
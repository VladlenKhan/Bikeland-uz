import styles from './HeaderTop.module.css'; 
import { Consult,Logo,SearchInput,Links } from './components/index.js'; 

const HeaderTop = () => {
    return ( 
        <div className={styles.headerTop}>
          
           <div className={styles.block}>
            <Links/> 
            <SearchInput/> 
            <Logo/>
            </div>
            <div className={styles.block2}>
            <Consult/>
            </div>
        </div>
     );
}
 
export default HeaderTop;
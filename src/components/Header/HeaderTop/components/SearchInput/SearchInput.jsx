import styles from './SearchInput.module.css';

const SearchInput = () => {
    return ( 
        <div className={styles.search}>
            <a href='#' className={styles.search__img}>
                <img src="/loop.svg" alt="" />
            </a>
            <div>
                <input className={styles.search__input} type="text" placeholder='Искать на сайте'/>
            </div>
        </div>
     );
}
 
export default SearchInput;
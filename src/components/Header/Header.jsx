import styles from "./Header.module.css"; 
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
      <HeaderTop />
      <HeaderBottom/>
        </div>
    </header>
  );
};

export default Header;
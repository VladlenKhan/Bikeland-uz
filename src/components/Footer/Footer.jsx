import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Social,Advantages,Contact,List } from "./components";
 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>  
        <div className={styles.logo}>
          <Link to="/"> <img src="/bikelandbiglogo.png" alt="icon" /></Link>
        </div>
        <Advantages/>
        <Contact/>
        <List/>
        <Social/>
        <div className={styles.policy}>
        © Все права защищены. Bikeland.uz & HAYAT CO LTD 2004-2023
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
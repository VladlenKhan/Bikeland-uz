import { Button,Card } from './components'
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
      <Button/>
    </div>
  );
};

export default Cards;
import { Button, Card } from "../../UI"; 
import { About, Form } from "../../components";
import styles from './Categories.module.css';
const Categories = () => {
  return (
    <>
    <div className={styles.block}>
      <div className={styles.block__title}>МОТОЦИКЛЫ</div>
      <div className={styles.block__elem}>
        <div className={styles.block__text}>Порядок:</div>
        <select className={styles.block__select}>
          <option value="1">По умолчанию</option>
        </select>
      </div>
    </div>
      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Button />
      <About/>
      <Form/>
    </>
  );
};

export default Categories;
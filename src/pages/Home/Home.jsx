import { Button,Card } from "../../UI";
import { Better, Form, Youtube, Slide } from "../../components";
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <Better />
      <div className={styles.cards}>
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
      <Youtube />
      <Slide />
      <Form />
    </>
  );
};

export default Home;

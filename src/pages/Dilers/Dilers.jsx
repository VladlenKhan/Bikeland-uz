import { About,  Form, Slide } from "../../components";
import styles from "./Dilers.module.css";

const Dilers = () => {
  return (
    <>
      <div className={styles.title}>ДИЛЕРЫ BIKELAND.UZ</div>
      <Slide/>
      <About/>
      <Form/>
    </>
  );
};

export default Dilers;

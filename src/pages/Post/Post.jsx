import { About, Form } from "../../components";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <>
      <div className={styles.title}>Доставим в любую точку Узбекистана</div>
      <div className={styles.subtitle}>
        Мы бренд "Bikeland.uz" на рынке более 8 лет и ежедневно отправляем
        мото-технику по регионам нашей родины. <br /> Доставим от 150 тысяч сум
        до вашего дома или города. <br /> Для крупных партий обращайтесь к нам:
        info@bikeland.uz или +998555006001
      </div>
      <div className={styles.title}>Отправка мото-техники</div>
      <div className={styles.block}>
        <div className={styles.block__elem}>
          <div>
            <img src="/photobikebig.png" alt="img" />
          </div>
          <div cla>
            <img src="/photobikebig.png" alt="img" />
          </div>
        </div>
        <div className={styles.block__elem}>
          <div>
            <img src="/photobikemin.png" alt="img" />
          </div>
          <div>
            <img src="/photobikemin.png" alt="img" />
          </div>
          <div>
            <img src="/photobikemin.png" alt="img" />
          </div>
          <div>
            <img src="/photobikemin.png" alt="img" />
          </div>
        </div>
        <div></div>
      </div>
      <About />
      <Form />
    </>
  );
};

export default Post;

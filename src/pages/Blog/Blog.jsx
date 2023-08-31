import { Article, Button } from "../../UI";
import { About, Form } from "../../components";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.title}>
        Наш блог с новостями и полезной информацией
      </div>
      <div className={styles.cards}>
        <Article />
        <Article />
        <Article />
        <Article />
      
      </div>  
      <Button/>
        <About/>
        <Form/>
    </>
  );
};

export default Blog;

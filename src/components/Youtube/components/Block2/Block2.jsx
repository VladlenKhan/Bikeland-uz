import styles from "./Block2.module.css";

const Block2 = () => {
  return (
    <div className={styles.block}>
      <div>
        <iframe
          width="400"
          height="260"
          src="https://www.youtube.com/embed/h2eeD4DHDes?si=YBGg-O5Hs_a5dvuq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <iframe
          width="400"
          height="260"
          src="https://www.youtube.com/embed/h2eeD4DHDes?si=YBGg-O5Hs_a5dvuq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      
        <a href="#" className={styles.button}>Смотреть больше</a>
    
    </div>
  );
};

export default Block2;

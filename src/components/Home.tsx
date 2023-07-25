import styles from "./Home.module.css";
import ImageSwiper from "./ImageSwiper";

const ILLUSTRATIONS: string[] = [
  "/images/illustrations/i_girl_1.png",
  "/images/illustrations/i_girl_2.png",
  "/images/illustrations/i_girl_3.png",
  "/images/illustrations/i_girl_4.png",
  "/images/illustrations/i_girl_5.png",
];

const Home: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hello_text}>
        {" "}
        <h1>
          HELLO, I’M <br />
          FLAVIA VELCSOV
        </h1>
        <div className={styles.paragraph}>
          A passionate <b>graphic designer</b> with a relentless drive to
          transform ideas into captivating visual experiences. With a boundless
          imagination and a keen eye for detail, I strive to leave a lasting
          impression through my creative designs.
        </div>
        <p>I do</p>
        <p className={styles.section_title}>ILLUSTRATIONS</p>
        <ImageSwiper illustrations={ILLUSTRATIONS} />
      </div>
    </div>
  );
};

export default Home;

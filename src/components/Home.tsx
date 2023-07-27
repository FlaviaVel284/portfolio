import styles from "./Home.module.css";
import ImageSwiper from "./ImageSwiper";
import PhotoGrid_1 from "./photo_grids/PhotoGrid_1";

const ILLUSTRATIONS: string[] = [
  "/images/illustrations/i_girl_1.png",
  "/images/illustrations/i_girl_2.png",
  "/images/illustrations/i_girl_3.png",
  "/images/illustrations/i_girl_4.png",
  "/images/illustrations/i_girl_5.png",
];

const GRID_1_ILLUSTRATIONS: string[] = [
  "/images/gradientshape-1.png",
  "/images/space-wallpaper-1.png",
  "/images/baugasm-poster-21.png",
  "/images/cristal-postersmall-1.png",
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
        <div className={styles.paragraph}>
          Having a passion for art since a young age has always been an integral
          part of who I am. From the moment I picked up a pencil and started
          doodling, I knew I had discovered a profound connection to the world
          of creativity and self-expression.
        </div>
        <p className={`${styles.section_title} ${styles.right}`}>
          ABSTRACT ART
        </p>
        <PhotoGrid_1 illustrations={GRID_1_ILLUSTRATIONS}></PhotoGrid_1>
      </div>
    </div>
  );
};

export default Home;

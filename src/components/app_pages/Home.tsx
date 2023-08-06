import styles from "./Home.module.css";
import ImageSwiper from "../photo_layouts/ImageSwiper";
import PhotoDuo from "../photo_layouts/PhotoDuo";
import PhotoGrid_1 from "../photo_layouts/PhotoGrid_1";
import PhotoList from "../photo_layouts/PhotoList";

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

const LIST_ILLUSTRATIONS: string[] = [
  "/images/poster_1.png",
  "/images/poster_2.png",
  "/images/poster_3.png",
  "/images/poster_4.png",
];

const DUO_ILLUSTRATIONS: string[] = [
  "/images/tumblr.png",
  "/images/smart_ret.png",
];

const Home: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hello_text}>
          {" "}
          <h1>
            HELLO, I’M <br />
            FLAVIA VELCSOV
          </h1>
          <div className={styles.paragraph}>
            A passionate <b>graphic designer</b> with a relentless drive to
            transform ideas into captivating visual experiences. With a
            boundless imagination and a keen eye for detail, I strive to leave a
            lasting impression through my creative designs.
          </div>
          <p>I do</p>
          <p className={styles.section_title}>ILLUSTRATIONS</p>
          <ImageSwiper illustrations={ILLUSTRATIONS} />
          <div className={styles.paragraph}>
            Having a passion for art since a young age has always been an
            integral part of who I am. From the moment I picked up a pencil and
            started doodling, I knew I had discovered a profound connection to
            the world of creativity and self-expression.
          </div>
          <p className={`${styles.section_title} ${styles.right}`}>
            ABSTRACT ART
          </p>
          <PhotoGrid_1 illustrations={GRID_1_ILLUSTRATIONS}></PhotoGrid_1>
          <div className={styles.paragraph}>
            Art has always been my sanctuary—a realm where I can freely explore
            my imagination, experiment with colors and shapes, and unleash my
            innermost emotions. My interest in digital art prompted me to
            experiment with different tools, including Adobe Illustrator, Adobe
            Photoshop, Krita, and also some 3D software, such as Cinema 4D,
            Blender.
          </div>
          <p className={styles.section_title}>POSTERS </p>
        </div>{" "}
      </div>
      <PhotoList illustrations={LIST_ILLUSTRATIONS} line={true} />
      <p className={`${styles.section_title} ${styles.mid}`}>
        BUSINESS CONCEPTS{" "}
      </p>
      <PhotoDuo illustrations={DUO_ILLUSTRATIONS} />
      <div className={`${styles.container} ${styles.end}`}>
        <div className={styles.paragraph}>
          Thank you for taking the time to explore my portfolio and delve into
          the artistic journey I have embarked upon. I hope that through this
          visual odyssey, you have gained a glimpse into my creative spirit, my
          passion for design, and my dedication to crafting captivating visual
          experiences.
        </div>{" "}
        <button className={styles.portfolio}>EXPLORE MY PORTFOLIO</button>
        <div className={styles.paragraph}>
          Please feel free to reach out to me with any inquiries, ideas, or
          opportunities to collaborate. I am eager to continue this artistic
          voyage and look forward to the possibility of working together to
          shape the visual landscape in extraordinary ways.
        </div>
        <p className={`${styles.section_title} ${styles.mid}`}>
          LET’S GET IN CONTACT{" "}
        </p>
        <div className={styles.site_links}>
          {" "}
          <img src="/images/behance_big.svg" />
          <img src="/images/instagram_big.svg" />
          <img src="/images/mail.svg" />
          <img src="/images/dribbble.svg" />
        </div>
        <div className={styles.contact}>+40 755 590 208</div>{" "}
        <div className={styles.contact}>flavia.velcsov@yahoo.com</div>
      </div>{" "}
      <img className={styles.end_curve} src="/images/end_curve.svg" />
    </>
  );
};

export default Home;

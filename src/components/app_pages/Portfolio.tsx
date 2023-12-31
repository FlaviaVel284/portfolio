import PageTitle from "../PageTitle";
import Gallery from "../photo_layouts/Gallery";
import styles from "./Portfolio.module.css";

const GALLERY = [
  "/images/portfolio/1.jpg",
  "/images/portfolio/2.jpg",
  "/images/portfolio/3.jpg",
  "/images/portfolio/4.jpg",
  "/images/portfolio/5.jpg",
  "/images/portfolio/6.jpg",
  "/images/portfolio/7.jpg",
  "/images/portfolio/8.jpg",
  "/images/portfolio/9.jpg",
  "/images/portfolio/10.jpg",
  "/images/portfolio/11.jpg",
  "/images/portfolio/12.jpg",
  "/images/portfolio/13.jpg",
  "/images/portfolio/14.jpg",
  "/images/portfolio/15.jpg",
  "/images/portfolio/16.jpg",
  "/images/portfolio/17.jpg",
  "/images/portfolio/18.jpg",
  "/images/portfolio/19.jpg",
  "/images/portfolio/20.jpg",
  "/images/portfolio/22.jpg",
  "/images/portfolio/23.jpg",
  "/images/portfolio/24.jpg",
  "/images/portfolio/25.png",
  "/images/portfolio/26.jpg",
  "/images/portfolio/27.png",
  "/images/portfolio/28.jpg",
  "/images/portfolio/29.jpg",
  "/images/portfolio/30.jpg",
  "/images/portfolio/31.jpg",
  "/images/portfolio/32.jpg",
  "/images/portfolio/33.jpg",
  "/images/portfolio/34.jpg",
  "/images/portfolio/35.jpg",
  "/images/portfolio/36.jpg",
  "/images/portfolio/13.jpg",
  "/images/portfolio/37.jpg",
  "/images/portfolio/38.jpg",
  "/images/portfolio/39.jpg",
  "/images/portfolio/40.png",
  "/images/portfolio/41.jpg",
  "/images/portfolio/42.jpg",
  "/images/portfolio/43.png",
  "/images/portfolio/44.jpg",
  "/images/portfolio/45.jpg",
  "/images/portfolio/46.jpg",
  "/images/portfolio/47.jpg",
  "/images/portfolio/48.jpg",
  "/images/portfolio/49.jpg",
  "/images/portfolio/50.jpg",
  "/images/portfolio/51.jpg",
  "/images/portfolio/52.jpg",
  "/images/portfolio/53.jpg",
  "/images/portfolio/54.png",
  "/images/portfolio/55.jpg",
  "/images/portfolio/56.png",
  "/images/portfolio/57.jpg",
];

const Portfolio: React.FunctionComponent = () => {
  return (
    <>
      {" "}
      <div className={styles.container}>
        <PageTitle>PORTFOLIO</PageTitle>
        <div className={styles.gallery_container}>
          {" "}
          <Gallery images={GALLERY} />
        </div>
        <img className={styles.end_curve} src="/images/end_curve.svg" />
      </div>
    </>
  );
};

export default Portfolio;

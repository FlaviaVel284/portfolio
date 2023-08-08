import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";
import PhotoList from "../photo_layouts/PhotoList";
import styles from "./About.module.css";

const LIST_ILLUSTRATIONS: string[] = [
  "/images/square-1.png",
  "/images/acvatic-landscape-1.png",
  "/images/square-2.png",
];
const VIDEOS: string[] = ["/images/montec-1.png", "/images/ski-day.png"];

const About: React.FunctionComponent = () => {
  return (
    <>
      {" "}
      <div className={styles.container}>
        <PageTitle>ABOUT ME</PageTitle>
        <div className={styles.about}>
          <div className={styles.intro}>
            {" "}
            <div className={styles.text_intro}>
              {" "}
              <p className={styles.section_title}>I am FLAVIA</p>
              <div className={styles.paragraph}>
                a Romanian graphic designer and application developer.
              </div>
            </div>{" "}
            <img src="/images/flavia2.png" alt="" className={styles.flavia} />
          </div>
        </div>{" "}
        <div className={styles.content}>
          {" "}
          <div className={styles.paragraph}>
            As a child, I had an insatiable curiosity, a passion for creative
            exploration, and a deep love for art, but I also discovered that I
            was really attracted to computers and technology. This is why I
            studied mathematics & informatics in high school, and then I pursued
            a degree in Computers & Information Technology.
          </div>
          <div className={styles.photo_text}>
            {" "}
            <div className={styles.photo_pair}>
              <img src="/images/afis-badescu-1.png" className={styles.afis1} />
              <img
                src="/images/primavara-prin-obiectiv-1.png"
                className={styles.afis2}
              />
            </div>{" "}
            <div className={`${styles.paragraph} ${styles.half}`}>
              At the tender age of 14, I embarked on a journey of creative
              exploration, delving into the world of design with tools like
              Adobe Photoshop. It all began with the simple task of creating
              posters for my high school and various volunteering group events,
              but little did I know that these early experiences would ignite a
              profound sense of fulfillment and fuel my creativity.
            </div>
          </div>{" "}
          <div className={styles.paragraph}>
            As my artistic journey progressed, I delved further into the vast
            realm of digital design, extending my exploration beyond Adobe
            Photoshop. With a hunger for new tools and techniques, I ventured
            into the realms of Adobe Illustrator and Krita, unearthing a
            profound desire to create illustrations and delve into the world of
            vectorial art.
          </div>
          <PhotoList illustrations={LIST_ILLUSTRATIONS} />
          <div className={styles.paragraph}>
            As I embark on new creative endeavors, I eagerly embrace the
            boundless possibilities that lie ahead. I am committed to pushing
            the boundaries of illustration and digital design, bringing forth
            products that ignite imagination, evoke emotions, and inspire others
            to see the world through a different lens.
          </div>
          <div className={styles.tools}>
            <div className={styles.design_tools}>My Design Tools</div>
            <img
              className={styles.logo}
              src="/images/photoshop.svg"
              alt="photoshop"
            />
            <img
              className={styles.logo}
              src="/images/Ai.svg"
              alt="illustrator"
            />
            <img className={styles.logo} src="/images/krita.svg" alt="krita" />
            <img className={styles.logo} src="/images/Pr.svg" alt="premier" />
          </div>
          <div className={styles.hashtag}>
            #graphicdesign#photoediting#branddesign#illustration#digitalartist#vectorialart#posterdesign#adobephotoshop#graphicdesign#photoediting#branddesign#illustration#digitalartist#vectorialart#posterdesign#adobephotoshop{" "}
          </div>
          <div className={styles.paragraph}>
            In recent times, I have stumbled upon a new passion that has ignited
            my creative spirit and unveiled a world of possibilities—video
            editing. Through the power of Adobe Premiere Pro, I have embarked on
            a captivating journey into the realm of visual storytelling, where
            every frame becomes a brushstroke, and every sequence holds the
            potential to captivate and move audiences.
          </div>
          <PhotoList illustrations={VIDEOS} />
          <p className={`${styles.section_title} ${styles.mid}`}>
            Are you ready to bring your creative visions to life? <br />
            <br />
            Do you have a project in mind that requires the touch of a skilled
            graphic designer? <br />
            <br />
            Look no further – you've come to the right place!{" "}
          </p>
          <Link to="/portfolio">
            {" "}
            <button type="button" className={styles.portfolio}>
              EXPLORE MY PORTFOLIO
            </button>
          </Link>
          <div className={styles.end}>
            {" "}
            <p className={`${styles.section_title} ${styles.mid}`}>
              LET’S GET IN CONTACT{" "}
            </p>
            <div className={styles.site_links}>
              {" "}
              <Link
                to="https://www.behance.net/v_flavia99"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src="/images/behance_big.svg" />
              </Link>{" "}
              <Link
                to="https://www.instagram.com/fla_v_art/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src="/images/instagram_big.svg" />{" "}
              </Link>
              <Link
                to="https://dribbble.com/v_flavia99"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src="/images/dribbble.svg" />
              </Link>
            </div>
            <div className={styles.contact}>+40 755 590 208</div>{" "}
            <div className={styles.contact}>flavia.velcsov@yahoo.com</div>
          </div>
        </div>
        <img className={styles.end_curve} src="/images/end_curve.svg" />
      </div>
    </>
  );
};

export default About;

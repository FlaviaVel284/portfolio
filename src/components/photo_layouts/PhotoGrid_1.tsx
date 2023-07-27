import styles from "./PhotoGrid_1.module.css";

interface PhotoGrid_1Props {
  illustrations: string[];
}

const PhotoGrid_1: React.FunctionComponent<PhotoGrid_1Props> = ({
  illustrations,
}) => {
  const extraStyle = [
    {
      background: `url(${illustrations[0]})`,
      "background-size": "cover",
      "background-position": "center",
    },
    {
      background: `url(${illustrations[1]})`,
      "background-size": "cover",
      "background-position": "center",
    },
    {
      background: `url(${illustrations[2]})`,
      "background-size": "cover",
      "background-position": "center",
    },
    {
      background: `url(${illustrations[3]})`,
      "background-size": "cover",
      "background-position": "center",
    },
  ];
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.parent}>
        <div className={styles.div1} style={extraStyle[0]} />
        <div className={styles.div2} style={extraStyle[1]} />
        <div className={styles.div3} style={extraStyle[2]} />
        <div className={styles.div4} style={extraStyle[3]} />
      </div>
    </div>
  );
};

export default PhotoGrid_1;

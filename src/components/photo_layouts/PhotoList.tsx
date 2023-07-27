import styles from "./PhotoList.module.css";
interface PhotoListProps {
  illustrations: string[];
}

const PhotoList: React.FunctionComponent<PhotoListProps> = ({
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
      <div className={styles.parent}>
        <div className={styles.photo} style={extraStyle[0]}></div>
        <div className={styles.photo} style={extraStyle[1]}></div>
        <div className={styles.photo} style={extraStyle[2]}></div>
        <div className={styles.photo} style={extraStyle[3]}></div>
      </div>
      <img className={styles.line} src="/images/rectangle_11.svg" />
    </div>
  );
};

export default PhotoList;

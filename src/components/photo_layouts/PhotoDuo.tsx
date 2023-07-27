import styles from "./PhotoDuo.module.css";

interface PhotoDuoProps {
  illustrations: string[];
}

const PhotoDuo: React.FunctionComponent<PhotoDuoProps> = ({
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
  ];
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.photo} style={extraStyle[0]}></div>
        <div className={styles.photo} style={extraStyle[1]}></div>
      </div>
    </div>
  );
};

export default PhotoDuo;

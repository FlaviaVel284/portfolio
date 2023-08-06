import styles from "./PhotoList.module.css";
interface PhotoListProps {
  illustrations: string[];
  line?: boolean;
}

interface extraStyle {
  background: string;
  "background-size": string;
  "background-position": string;
}

function mapToExtraStyle(illustration: string): extraStyle {
  return {
    background: `url(${illustration}) center center / cover`,
    "background-size": "cover",
    "background-position": "center",
  };
}

const PhotoList: React.FunctionComponent<PhotoListProps> = ({
  illustrations,
  line,
}) => {
  const extraStyles: extraStyle[] = illustrations.map(mapToExtraStyle);

  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        {illustrations.map((illustr, index) => (
          <div className={styles.photo} style={extraStyles[index]} />
        ))}
      </div>
      {line && <img className={styles.line} src="/images/rectangle_11.svg" />}
    </div>
  );
};

export default PhotoList;

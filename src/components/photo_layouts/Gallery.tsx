import styles from "./Gallery.module.css";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FunctionComponent<GalleryProps> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} className={styles.gallery_item} />
      ))}
    </div>
  );
};

export default Gallery;

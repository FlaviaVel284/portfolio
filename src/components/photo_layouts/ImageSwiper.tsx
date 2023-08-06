import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ImageSwiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

interface ImageSwiperProps {
  illustrations: string[];
}

const ImageSwiper: React.FunctionComponent<ImageSwiperProps> = ({
  illustrations,
}) => {
  return (
    <div className={styles.container}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        }}
        initialSlide={2}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
      >
        {illustrations.map((image) => (
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;

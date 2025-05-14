import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageSlider.scss';
import { Link } from 'react-router';

const images = [
  { src: '/SliderBanners/Banner1.png', link: '/phones' },
  { src: '/SliderBanners/Banner2.png', link: '/tablets' },
  { src: '/SliderBanners/Banner3.png', link: '/accessories' },
];

export const ImageSlider = () => {
  return (
    <div className="image-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="swiper-wrapper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Link to={image.link}>
              <img src={image.src} alt={`Slide ${index + 1}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

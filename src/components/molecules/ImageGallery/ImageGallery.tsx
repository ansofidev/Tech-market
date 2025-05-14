import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { getImageUrl } from '@/features/getImageUrl';

interface Props {
  images: string[];
  activeImageIndex?: number;
  handleThumbnailClick?: (index: number) => void;
}

export const ImageGallery = ({
  images,
  activeImageIndex: externalIndex,
  handleThumbnailClick: externalClickHandler,
}: Props) => {
  const [internalIndex, setInternalIndex] = useState(externalIndex ?? 0);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (typeof externalIndex === 'number' && externalIndex !== internalIndex) {
      setInternalIndex(externalIndex);
      mainSwiper?.slideTo(externalIndex);
    }
  }, [externalIndex, internalIndex, mainSwiper]);

  const handleThumbnailClick = (index: number) => {
    setInternalIndex(index);
    if (mainSwiper) {
      mainSwiper.slideTo(index);
      mainSwiper.autoplay.stop();
    }
    externalClickHandler?.(index);
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-7 xl:grid-cols-12 gap-4">
      <div className="col-span-full sm:col-span-1 sm:col-start-1 xl:col-span-2 order-2 sm:order-1">
        <div className="grid grid-cols-4 sm:grid-cols-1 gap-2">
          {images.map((url, i) => {
            const imageUrl = getImageUrl(url);
            return (
              <div
                key={i}
                onClick={() => handleThumbnailClick(i)}
                className={`col-span-1 aspect-square cursor-pointer border ${
                  internalIndex === i
                    ? 'border-[#F1F2F9] border-2'
                    : 'border-[#3B3E4A]'
                }`}
              >
                <img
                  src={imageUrl}
                  alt={`Thumbnail ${i}`}
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-full sm:col-span-6 sm:col-start-2 xl:col-span-10 xl:col-start-3 order-1 sm:order-2 aspect-square flex items-center justify-center">
        {images.length > 0 ? (
          <Swiper
            spaceBetween={10}
            navigation={false}
            onSwiper={setMainSwiper}
            onSlideChange={(swiper) => {
              setInternalIndex(swiper.activeIndex);
              externalClickHandler?.(swiper.activeIndex);
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            className="w-full h-full"
          >
            {images.map((url, i) => {
              const imageUrl = getImageUrl(url);
              return (
                <SwiperSlide key={i}>
                  <img
                    src={imageUrl}
                    alt={`Main image ${i}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="w-full h-full border border-[#3B3E4A] flex items-center justify-center text-[#89939A]">
            No image available
          </div>
        )}
      </div>
    </div>
  );
};

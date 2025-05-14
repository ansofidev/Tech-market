'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { ProductCard } from '@/components/organisms/ProductCard/ProductCard';
import Button from '@/components/atoms/button/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ButtonTypes } from '@/types/ButtonTypes';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './YouMayAlsoLike.module.scss';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { fetchProducts } from '@/features/productsSlice';
import { CategoryType } from '@/types/CategoryType';
import { Loader } from '@/components/atoms/Loader/Loader';
import { ProductDetails } from '@/types/ProductDetails';
import { FilterStatus } from '@/types/FilterStatusType';

import { useTranslation } from 'react-i18next';
import { ProductCardType } from '@/types/ProductCardType';

type Props = {
  currentProduct?: ProductDetails;
  category: CategoryType;
};

export const YouMayAlsoLikeSlider: React.FC<Props> = ({
  currentProduct,
  category,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductCardType[]>(
    [],
  );
  const [swiperReady, setSwiperReady] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({ threshold: 0.2 });

  const dispatch = useAppDispatch();
  const { productsList, isLoading } = useAppSelector((state) => state.products);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(
      fetchProducts({
        category,
        sortBy: FilterStatus.newest,
      }),
    );
  }, [dispatch, category]);

  useEffect(() => {
    if (productsList.length > 0) {
      const related = productsList
        .filter((p) => {
          if (currentProduct) {
            return String(p.id) !== currentProduct.id;
          }
        })
        .slice(0, 8);
      setFilteredProducts(
        related.length > 0 ? related : productsList.slice(0, 8),
      );
      setSwiperReady(true);
    }
  }, [currentProduct, productsList]);

  if (isLoading || !swiperReady) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <Loader />
      </div>
    );
  }

  return (
    <section
      id="itemPageContent"
      className={`${styles.youMayAlsoLike} bg-[#0F1121] py-10 overflow-hidden`}
    >
      <motion.h2
        ref={ref}
        className="col-span-full text-2xl sm:text-3xl text-[#F1F2F9] font-[MontBold] mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
        }}
        transition={{ duration: 1 }}
      >
        {t('youMayLike.label')}
      </motion.h2>

      <div className="col-span-full relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.5}
          watchOverflow
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id} className="!shrink-0 !grow-0 py-10">
              <ProductCard
                id={product.id}
                name={product.name}
                priceRegular={product.fullPrice}
                priceDiscount={product.price}
                img={product.image}
                screen={product.screen}
                capacity={product.capacity}
                ram={product.ram}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-[-60px] right-0 flex gap-2">
          <div
            ref={prevRef}
            className={`${isBeginning ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <Button variant={ButtonTypes.arrow} icon={ChevronLeft} />
          </div>
          <div
            ref={nextRef}
            className={`${isEnd ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <Button variant={ButtonTypes.arrow} icon={ChevronRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

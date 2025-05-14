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

import styles from './HotPricesSlider.module.scss';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { fetchProducts } from '@/features/productsSlice';
import { CategoryType } from '@/types/CategoryType';
import { Loader } from '@/components/atoms/Loader/Loader';
import { FilterStatus } from '@/types/FilterStatusType';

import { useTranslation } from 'react-i18next';

export const HotPricesSlider = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperReady, setSwiperReady] = useState(false);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({ threshold: 0.2 });

  const dispatch = useAppDispatch();
  const { productsList, isLoading } = useAppSelector((store) => store.products);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: CategoryType.phones,
        sortBy: FilterStatus.newest,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    if (productsList.length > 0) {
      setSwiperReady(true);
    }
  }, [productsList]);

  const discountedProducts = [...productsList]
    .sort((a, b) => {
      const discountA = a.fullPrice - a.price;
      const discountB = b.fullPrice - b.price;
      return discountB - discountA;
    })
    .slice(0, 10);

  if (isLoading || !swiperReady) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <Loader />
      </div>
    );
  }

  return (
    <section className={styles.hotPrices}>
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
        {t('hotPricesSlider.label')}
      </motion.h2>

      <div className="col-span-full relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.5}
          watchOverflow
          loop={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
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
          {discountedProducts.map((product) => (
            <SwiperSlide key={product.id} className="!shrink-0 !grow-0 py-10">
              <ProductCard
                key={product.id}
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

import styles from './HomePageTemplate.module.scss';
import { ImageSlider } from '@/components/organisms/BannerSlider/ImageSlider';
import { BrandNewSlider } from '@/components/organisms/BrandNewSlider/BrandNewSlider';
import { HotPricesSlider } from '@/components/organisms/HotPricesSlider/HotPricesSlider';
import { ShopCategories } from '@/components/organisms/ShopCategories/ShopCategories';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HomePageTemplate = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.homePage}>
        <motion.h1
          className="text-[48px] font-[montBold] leading-[56px] tracking-[-1%] mt-[56px] col-span-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {t('homePageTemplate.greeting', { storeName: 'Nice Gadgets' })}
        </motion.h1>
        <div className="col-span-full lg:mb-[80px] sm:mb-[64px] mb-[56px]">
          <ImageSlider />
        </div>
        <div className="col-span-full lg:mb-[80px] sm:mb-[64px] mb-[56px]">
          <BrandNewSlider />
        </div>
        <div className="col-span-full">
          <ShopCategories />
        </div>
        <div className="col-span-full lg:mb-[80px] mb-[64px]">
          <HotPricesSlider />
        </div>
      </div>
    </>
  );
};

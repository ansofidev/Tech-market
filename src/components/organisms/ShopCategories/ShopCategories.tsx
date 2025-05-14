import { Link } from 'react-router-dom';
import styles from './ShopCategories.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { getProducts } from '@/services/clientRequests';
import { CategoryType } from '@/types/CategoryType';
import { useTranslation } from 'react-i18next';

export const ShopCategories = () => {
  const [phonesCount, setPhonesCount] = useState<number | null>(null);
  const [tabletsCount, setTabletsCount] = useState<number | null>(null);
  const [accssesoriesCount, setAccssesoriesCount] = useState<number | null>(
    null,
  );

  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.2, //юзаем когда 20% элемента видно
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const [phones, tablets, accessories] = await Promise.all([
          getProducts(CategoryType.phones),
          getProducts(CategoryType.tablets),
          getProducts(CategoryType.accessories),
        ]);
        setPhonesCount(phones.length);
        setTabletsCount(tablets.length);
        setAccssesoriesCount(accessories.length);
      } catch (e) {
        console.warn(e);
      }
    };
    loadProducts();
  }, []);

  return (
    <section className={styles.shopCategories}>
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
        {t('shopCategories.label')}
      </motion.h2>

      <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {/* Mobile phones */}
        <Link
          to="/phones"
          className="w-full max-w-[368px] flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 animate-fade-up"
        >
          <img
            className="w-full aspect-square object-cover shadow-md transition-transform duration-300 hover:scale-101"
            src="/categories/phones.png"
            alt="category-mobile-phones"
          />
          <h4 className="mt-4 text-xl font-semibold transition-opacity duration-300 hover:opacity-80">
            {t('shopCategories.phones')}
          </h4>
          <h6 className="text-grey">
            {t('shopCategories.models', { count: phonesCount ?? 0 })}
          </h6>
        </Link>

        {/* Tablets */}
        <Link
          to="/tablets"
          className="w-full max-w-[368px] flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 animate-fade-up"
        >
          <img
            className="w-full aspect-square object-cover shadow-md transition-transform duration-300 hover:scale-101"
            src="/categories/tablets.png"
            alt="category-tablets"
          />
          <h4 className="mt-4 text-xl font-semibold transition-opacity duration-300 hover:opacity-80">
            {t('shopCategories.tablets')}
          </h4>
          <h6 className="text-[#F1F2F9]">
            {t('shopCategories.models', { count: tabletsCount ?? 0 })}
          </h6>
        </Link>

        {/* Accessories */}
        <Link
          to="/accessories"
          className="w-full max-w-[368px] flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 animate-fade-up"
        >
          <img
            className="w-full aspect-square object-cover shadow-md transition-transform duration-300 hover:scale-101"
            src="/categories/accss.png"
            alt="category-accessories"
          />
          <h4 className="mt-4 text-xl font-semibold transition-opacity duration-300 hover:opacity-80">
            {t('shopCategories.accessories')}
          </h4>
          <h6 className="text-grey">
            {t('shopCategories.models', { count: accssesoriesCount ?? 0 })}
          </h6>
        </Link>
      </div>
    </section>
  );
};

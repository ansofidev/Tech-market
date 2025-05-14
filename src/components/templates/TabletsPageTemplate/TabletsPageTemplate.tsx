import { CustomDropdown } from '@/components/atoms/dropdown/Dropdown';
import { Pagination } from '../../molecules/Pagination/Pagination';
import { ProductCard } from '@/components/organisms/ProductCard/ProductCard';
import { Loader } from '@/components/atoms/Loader/Loader';
import {
  fetchProducts,
  setStatus,
  setCurrentCategory,
} from '@/features/productsSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { CategoryType } from '@/types/CategoryType';
import { FilterStatus } from '@/types/FilterStatusType';
import { ItemsPerPage } from '@/types/ItemsPerPageType';

import { useTranslation } from 'react-i18next';

const DropdownItemsOnPage = [
  { value: '16', label: '16' },
  { value: '20', label: '20' },
  { value: '24', label: '24' },
];

export const TabletsPageTemplate = () => {
  const dispatch = useAppDispatch();
  const { productsList, isLoading, filter } = useAppSelector(
    (store) => store.products,
  );
  const { sortBy } = filter;

  const { t } = useTranslation();

  const DropdownSortBy = [
    { value: 'newest', label: t('tabletsPageTemplate.dropdown_sort.newest') },
    { value: 'oldest', label: t('tabletsPageTemplate.dropdown_sort.oldest') },
    {
      value: 'cheapest',
      label: t('tabletsPageTemplate.dropdown_sort.cheapest'),
    },
    {
      value: 'mostExpensive',
      label: t('tabletsPageTemplate.dropdown_sort.expensive'),
    },
  ];

  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(16);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = productsList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productsList.length / itemsPerPage);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    dispatch(fetchProducts({ category: CategoryType.tablets, sortBy }));
    dispatch(setCurrentCategory('tablets'));
    setCurrentPage(1);
  }, [dispatch, sortBy, itemsPerPage]);

  return (
    <div
      className="grid grid-cols-4 gap-4 
      min-[640px]:grid-cols-12
      min-[1200px]:grid-cols-24 px-4
      min-[640px]:px-6
      min-[1200px]:px-0
      min-[1200px]:max-w-[1136px] mx-auto
      pt-6 pb-16
      min-[640px]:pt-10 min-[640px]:pb-16
      min-[1200px]:pt-10 min-[1200px]:pb-20 
      gap-y-0"
    >
      {/* needs to update with dinamic routing */}
      <div
        id="tabletsPageTitle"
        className="col-span-full
          font-[Mont] font-extrabold
          text-[32px] leading-[41px] tracking-[-0.01em]
          min-[639px]:text-[48px] min-[1200px]:leading-[56px]
          text-[#F1F2F9] mb-2"
      >
        {t('tabletsPageTemplate.title')}
      </div>
      <div
        id="tabletsPageTitle"
        className="col-span-full
          font-[Mont] font-semibold
          text-[14px] leading-[21px] tracking-normal
          text-[#F1F2F9] mb-10"
      >
        {t('tabletsPageTemplate.models', { count: productsList.length })}
      </div>
      <div
        className="col-span-full grid 
          grid-cols-[repeat(4,min-content)] gap-4
          min-[640px]:grid-cols-[repeat(12,min-content)]
          min-[1200px]:grid-cols-[repeat(24,min-content)] pb-6"
      >
        <div
          className="col-span-2 
            min-[640px]:col-span-4
            min-[1200px]:col-span-4"
        >
          <CustomDropdown
            placeholder={t('tabletsPageTemplate.dropdown_sort.newest')}
            options={DropdownSortBy}
            onValueChange={(value) =>
              dispatch(setStatus({ sortBy: value as FilterStatus }))
            }
            size="medium"
            name={t('tabletsPageTemplate.dropdown_sort.label')}
          />
        </div>
        <div
          className="col-span-2 
            min-[640px]:col-span-3
            min-[1200px]:col-span-3"
        >
          <CustomDropdown
            placeholder="16"
            options={DropdownItemsOnPage}
            onValueChange={(value) => {
              setItemsPerPage(+value);
              setCurrentPage(1);
            }}
            size="small"
            name={t('tabletsPageTemplate.dropdown_amount.label')}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="col-span-full grid">
          <Loader />
        </div>
      ) : (
        <div
          className="col-span-full grid 
            grid-cols-1 gap-x-4 gap-y-10
            justify-items-center
            min-[400px]:grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4 mb-10"
        >
          {displayedProducts.map((product) => (
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
          ))}
        </div>
      )}
      <div className="col-span-full">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

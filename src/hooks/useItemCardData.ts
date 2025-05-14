import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { fetchProductDetails } from '@/features/productDetailsSlice';
import {
  selectProductCategory,
  setCurrentCategory,
} from '@/features/productsSlice';

export const useItemCardData = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams<{ productId: string }>();
  const product = useAppSelector((state) => state.productDetails.product);
  const isLoading = useAppSelector((state) => state.productDetails.isLoading);
  const category = useAppSelector(selectProductCategory);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetails({ id: Number(productId) }));
    }
  }, [productId, dispatch]);

  useEffect(() => {
    if (
      product?.basicInfo?.category &&
      category !== product.basicInfo.category
    ) {
      dispatch(setCurrentCategory(product.basicInfo.category));
    }
  }, [product, category, dispatch]);

  return { product, isLoading, productId };
};

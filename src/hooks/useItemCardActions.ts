import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { addFavourite, removeFavourite } from '@/features/favouritesSlice';
import { addToCart, removeFromCart } from '@/features/cartSlice';
import { findProductId } from '@/features/productDetailsSlice';
import { useTranslation } from 'react-i18next';
import { ProductDetails } from '@/types/ProductDetails';

export const useItemCardActions = (
  product: ProductDetails | null | undefined,
  productId: string | undefined,
) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const favourites = useAppSelector((state) => state.favourites.items);
  const cart = useAppSelector((state) => state.cart.items);

  const isFavourite = favourites.some((item) =>
    productId ? item.id === +productId : false,
  );

  const isInCart = Object.values(cart).some((el) =>
    productId ? el.product.id === +productId : false,
  );

  const handleFetchProduct = async (newProductId: string) => {
    const result = await dispatch(findProductId({ newProductId }));
    if (findProductId.fulfilled.match(result)) {
      navigate(`/product/${result.payload.id}`);
    }
  };

  const handleColorClick = (color: string) => {
    if (product?.namespaceId && product.color) {
      const newId = `${product.namespaceId}-${product.capacity
        .toLowerCase()
        .replace(/\s/g, '-')}-${color.toLowerCase().replace(/\s/g, '-')}`;
      handleFetchProduct(newId);
    }
  };

  const handleMemoryClick = (capacity: string) => {
    if (product?.namespaceId && product.capacity) {
      const newId = `${product.namespaceId}-${capacity
        .toLowerCase()
        .replace(
          /\s/g,
          '-',
        )}-${product.color.toLowerCase().replace(/\s/g, '-')}`;
      handleFetchProduct(newId);
    }
  };

  const toggleFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product?.basicInfo?.id) return;

    if (isFavourite) {
      dispatch(removeFavourite(product.basicInfo.id));
      toast.success(
        `${product.basicInfo.name} ${t('itemCardTemplate.toast.removedFromFavorites')}`,
        toastStyle,
      );
    } else {
      dispatch(
        addFavourite({ ...product.basicInfo, category: '', itemId: '' }),
      );
      toast.success(
        `${product.basicInfo.name} ${t('itemCardTemplate.toast.addedToFavorites')}`,
        toastStyle,
      );
    }
  };

  const toggleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product?.basicInfo?.id) return;

    if (isInCart) {
      dispatch(removeFromCart({ productId: product.basicInfo.id }));
      toast.success(
        `${product.basicInfo.name} ${t('itemCardTemplate.toast.removedFromCart')}`,
        toastStyle,
      );
    } else {
      dispatch(
        addToCart({
          product: { ...product.basicInfo, category: '', itemId: '' },
        }),
      );
      toast.success(
        `${product.basicInfo.name} ${t('itemCardTemplate.toast.addedToCart')}`,
        toastStyle,
      );
    }
  };

  const toastStyle = {
    style: {
      background: '#161827',
      color: '#F1F2F9',
      border: '1px solid #3B3E4A',
    },
  };

  return {
    handleColorClick,
    handleMemoryClick,
    toggleFavourite,
    toggleCart,
    isFavourite,
    isInCart,
  };
};

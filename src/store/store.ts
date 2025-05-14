import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { productsSlice } from '../features/productsSlice';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { favouritesSlice } from '@/features/favouritesSlice';
import productDetailsSlice from '../features/productDetailsSlice';
import { cartSlice } from '@/features/cartSlice';
import authSlice from '@/features/authSlice';

const rootReducer = combineSlices({
  products: productsSlice.reducer,
  favourites: favouritesSlice.reducer,
  productDetails: productDetailsSlice.reducer,
  cart: cartSlice.reducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

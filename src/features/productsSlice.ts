import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductCardType } from '../types/ProductCardType';
import { getProducts } from '@/services/clientRequests';
import { CategoryType } from '@/types/CategoryType';
import { FilterStatus } from '@/types/FilterStatusType';

interface ProductsState {
  productsList: ProductCardType[];
  isLoading: boolean;
  error: null | string;
  filter: {
    sortBy: FilterStatus;
  };
  currentCategory: string;
}

const initialState: ProductsState = {
  productsList: [],
  isLoading: false,
  error: null,
  filter: {
    sortBy: FilterStatus.newest,
  },
  currentCategory: 'phones',
};

export const fetchProducts = createAsyncThunk<
  ProductCardType[],
  {
    category: CategoryType;
    sortBy: FilterStatus;
  }
>('phones/fetchProducts', async ({ category, sortBy }) => {
  const data = await getProducts(category);

  const sortedData = [...data].sort((a, b) => {
    switch (sortBy) {
      case FilterStatus.newest:
        return b.year - a.year;
      case FilterStatus.oldest:
        return a.year - b.year;
      case FilterStatus.cheapest:
        return a.price - b.price;
      case FilterStatus.mostExpensive:
        return b.price - a.price;
      default:
        return 0;
    }
  });
  return sortedData;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setStatus: (
      state,
      action: PayloadAction<{
        sortBy?: FilterStatus;
      }>,
    ) => {
      const { sortBy } = action.payload;
      if (sortBy) state.filter.sortBy = sortBy;
    },
    setCurrentCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.productsList = []),
          (state.isLoading = true),
          (state.error = null);
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductCardType[]>) => {
          (state.productsList = action.payload),
            (state.isLoading = false),
            (state.error = null);
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.isLoading = false),
          (state.error = action.error.message || 'phones loading error');
      });
  },
});

export const selectProductCategory = (state: { products: ProductsState }) =>
  state.products.currentCategory || 'phones';

export const { setStatus, setCurrentCategory } = productsSlice.actions;

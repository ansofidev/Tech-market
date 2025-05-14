import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItemId, getProductDetails } from '@/services/clientRequests';
import { ProductDetails } from '../types/ProductDetails';

interface ProductDetailsState {
  product: ProductDetails | null;
  isLoading: boolean;
  error: string | null;
  newProductId: number | null;
}

const initialState: ProductDetailsState = {
  product: null,
  isLoading: false,
  error: null,
  newProductId: null,
};

export const fetchProductDetails = createAsyncThunk<
  ProductDetails,
  { id: number },
  { rejectValue: string }
>('productDetails/fetch', async ({ id }, { rejectWithValue }) => {
  try {
    const product = await getProductDetails(id);
    if (!product) {
      return rejectWithValue('Product not found');
    }
    return product;
  } catch (error) {
    return rejectWithValue('Failed to fetch product details');
  }
});

export const findProductId = createAsyncThunk<
  { id: number },
  { newProductId: string },
  { rejectValue: string }
>('products/getId', async ({ newProductId }, { rejectWithValue }) => {
  try {
    const id = await getItemId(newProductId);
    if (!id) {
      return rejectWithValue('Product not found');
    }

    return { id };
  } catch (error) {
    return rejectWithValue('Failed to find product id');
  }
});

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    clearProductDetails(state) {
      state.product = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(findProductId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newProductId = action.payload.id;
      })
      .addCase(findProductId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { clearProductDetails } = productDetailsSlice.actions;

export const selectProductName = (state: {
  productDetails: ProductDetailsState;
}) => state.productDetails.product?.name || '';

export default productDetailsSlice;

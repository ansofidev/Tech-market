import { ProductCardType } from '@/types/ProductCardType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ProductCartType = {
  items: { [id: number]: { product: ProductCardType; quantity: number } };
};

const loadCartFromLocalStorage = (): ProductCartType => {
  const cartData = localStorage.getItem('cart');
  if (cartData) {
    return JSON.parse(cartData);
  }
  return { items: {} };
};

const saveCartToLocalStorage = (cart: ProductCartType) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState: ProductCartType = loadCartFromLocalStorage();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: ProductCardType;
      }>,
    ) => {
      const { product } = action.payload;

      if (state.items[product.id]) {
        state.items[product.id].quantity += 1;
      } else {
        state.items[product.id] = { product, quantity: 1 };
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;

      delete state.items[productId];
      saveCartToLocalStorage(state);
    },
    addQuantity: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;

      if (state.items[productId]) {
        state.items[productId].quantity += 1;
      }
      saveCartToLocalStorage(state);
    },
    removeQuantity: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;

      if (state.items[productId] && state.items[productId].quantity > 1) {
        state.items[productId].quantity -= 1;
      }
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = {};
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addQuantity,
  removeQuantity,
  clearCart,
} = cartSlice.actions;

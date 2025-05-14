import { ProductCardType } from '@/types/ProductCardType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FavouritesState = {
  items: ProductCardType[];
};

const initialState: FavouritesState = {
  items: JSON.parse(localStorage.getItem('Favourites') || '[]'),
};

export const favouritesSlice = createSlice({
  name: 'favouritesSlice',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<ProductCardType>) => {
      const exist = state.items.find((item) => item.id === action.payload.id);

      if (!exist) {
        state.items.push(action.payload);
        localStorage.setItem('Favourites', JSON.stringify(state.items));
      }
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('Favourites', JSON.stringify(state.items));
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

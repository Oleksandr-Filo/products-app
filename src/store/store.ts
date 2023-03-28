import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/productsSlice';
import isDataLoadedReducer from '../features/isDataLoadedSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    isDataLoaded: isDataLoadedReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/Product';
import { getAllProducts } from '../api/products';

interface ProductsState {
  loadedProducts: Product[];
  products: Product[];
  isLoaded: boolean;
  hasError: boolean;
}

const initialState: ProductsState = {
  loadedProducts: [],
  products: [],
  isLoaded: false,
  hasError: false,
};

export const loadProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const loadedProducts = await getAllProducts();

    return loadedProducts;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByQuery: (state, action: PayloadAction<string>) => {
      state.products = state.loadedProducts.filter(product => {
        const normalizedQuery = action.payload
          .toLowerCase();
  
        const stringToCheck = `${product.title} ${product.category}`.toLowerCase();

        return stringToCheck.includes(normalizedQuery);
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadProducts.pending, (state) => {
      state.isLoaded = false;
    });

    builder.addCase(
      loadProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.isLoaded = true;
        state.loadedProducts = action.payload;
        state.products = action.payload;
      },
    );

    builder.addCase(loadProducts.rejected, (state) => {
      state.isLoaded = true;
      state.hasError = true;
    })
  },
});

export default productsSlice.reducer;
export const { filterByQuery } = productsSlice.actions;

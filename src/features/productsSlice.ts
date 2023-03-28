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

type NewProductData = Pick<Product, 'title'
  | 'description'
  | 'price'
  | 'rating'
  | 'stock'
  | 'category'>;

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
    addProduct: (state, action: PayloadAction<NewProductData>) => {
      const currentIds = state.products.map(product => product.id);
      const newId = Math.max(...currentIds) + 1;
      const newProduct: Product = {
        id: newId,
        ...action.payload,
        discountPercentage: 0,
        brand: '',
        thumbnail: '',
        images: [],
      };
      
      state.products.push(newProduct);
      state.loadedProducts.push(newProduct);
    },
    updateProduct: (state, action: PayloadAction<[number, Partial<Product>]>) => {
      const [id, data] = action.payload;
      const productIndex = state.products.findIndex(product =>
        product.id === id,
      );

      state.products = state.products.map((product, i) => (
        i === productIndex
          ? Object.assign(product, data)
          : product
      ));

      state.loadedProducts = state.loadedProducts.map((product, i) => (
        i === productIndex
          ? Object.assign(product, data)
          : product
      ));
    },
    deleteOne: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product =>
        product.id !== action.payload,
      );
      state.loadedProducts = state.loadedProducts.filter(product =>
        product.id !== action.payload,
      );
    },
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
export const {
  addProduct,
  updateProduct,
  deleteOne,
  filterByQuery,
} = productsSlice.actions;

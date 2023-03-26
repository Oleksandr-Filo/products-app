import React, { useEffect } from 'react';
import { FilterInput } from '../../components/FilterInput';
import { Loader } from '../../components/Loader';
import { ProductsTable } from '../../components/ProductsTable';
import { Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { loadProducts } from '../../features/productsSlice';
import s from './ProductsPage.module.scss';

export const ProductsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoaded, hasError } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <>
      <h1 className={s.products__title}>Products page</h1>

      <FilterInput />

      {!isLoaded && <Loader />}

      {isLoaded && !hasError && (
        <ProductsTable />
      )}

      {hasError && (
        <Alert
          severity="error"
          sx={{
            mt: 1,
          }}
        >
          Error was occurred
        </Alert>
      )}
    </>
  );
};

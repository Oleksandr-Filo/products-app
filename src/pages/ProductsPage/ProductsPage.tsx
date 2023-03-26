import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/products';
import { FilterInput } from '../../components/FilterInput';
import { Loader } from '../../components/Loader';
import { ProductsTable } from '../../components/ProductsTable';
import { Alert } from '@mui/material';
import { Product } from '../../types/Product';
import s from './ProductsPage.module.scss';

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);

    getAllProducts()
      .then(setProducts)
      .catch(e => setErrorMessage('Error was occured'))
      .finally(() => {
        setIsLoading(false);
        setIsDataLoaded(true);
      });
  }, []);

  return (
    <>
      <h1 className={s.products__title}>Products page</h1>

      <FilterInput />

      {isLoading && <Loader />}

      {isDataLoaded && !isLoading && (
        <ProductsTable productsList={products} />
      )}

      {!!errorMessage && (
        <Alert
          severity="error"
          sx={{
            mt: 1,
          }}
        >
          {errorMessage}
        </Alert>
      )}
    </>
  );
};

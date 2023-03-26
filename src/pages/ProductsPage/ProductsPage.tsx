import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/products';
import { ProductsTable } from '../../components/ProductsTable';
import { Product } from '../../types/Product';

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts()
      .then(setProducts);
  }, []);

  return (
    <>
      <h1>Products page</h1>

      <ProductsTable productsList={products} />
    </>
  );
};

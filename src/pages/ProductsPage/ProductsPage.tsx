import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/products';
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

      <h2>Here will be products table</h2>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

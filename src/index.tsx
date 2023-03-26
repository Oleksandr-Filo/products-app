import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  HashRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductAddPage } from './pages/ProductAddPage';
import { ProductsPage } from './pages/ProductsPage';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ProductsPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="products" element={<Navigate to="/" replace />} />
            <Route path="product_add_form" element={<ProductAddPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

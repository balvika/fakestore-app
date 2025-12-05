import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
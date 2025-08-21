import React from 'react';
import ProductList from '../components/ProductList';

/* Página principal de la tienda */
const Home = () => {
  return (
    <main>
      <h2>Bienvenido a ElectroSalud</h2>
      {/* Lista de productos */}
      <ProductList />
    </main>
  );
};

export default Home;

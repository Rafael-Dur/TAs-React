import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams(); // Obtiene el ID del parámetro de la URL

  // Simulación de datos de productos
  const products = [
    { id: '1', name: 'Producto A', description: 'Descripción del Producto A' },
    { id: '2', name: 'Producto B', description: 'Descripción del Producto B' },
    { id: '3', name: 'Producto C', description: 'Descripción del Producto C' },
  ];

  // Encuentra el producto por ID
  const product = products.find((product) => product.id === id);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </>
      ) : (
        <h2>Producto no encontrado</h2>
      )}
    </div>
  );
};

export default Product;

import React, { useEffect, useState, useContext } from 'react';
import fetchProducts from '../services/api';
import { CartContext } from '../context/CartContext';

/* Componente para mostrar la lista de productos */
const ProductList = () => {
    const [products, setProducts] = useState([]);
    /* Contexto del carrito permite interactuar con el carrito de compras */
    const { addToCart } = useContext(CartContext);

    /* Carga los productos al montar el componente */
    useEffect(() => {
        const loadProducts = async () => {
            // Llama a la API para obtener los productos
            const data = await fetchProducts();
            // Actualiza el estado con los productos obtenidos
            setProducts(data);
        };
        // Llama a la función para cargar los productos
        loadProducts();
    }, []);
    /* Renderiza la lista de productos */
    return (
        <section>
            <h2>Produtos disponibles</h2>
            {/* Muestra la lista de productos */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {/* Muestra cada producto */}
                {products.map(product => (
                    /* Identificar de manera única cada elemento en las listas */
                    <div key={product.id} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '200px' }}>
                        <h4>{product.title}</h4>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductList;

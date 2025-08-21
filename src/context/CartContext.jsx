import React, { createContext, useState } from 'react'

/* Función para compartir datos globales */
export const CartContext = createContext();

/* Proveedor del contexto del carrito */
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    /* Función para agregar un producto al carrito */
    const addToCart = product => {
        // Verifica si el producto ya está en el carrito
        setCartItems(prev => {
            const exists = prev.find(item => item.id === product.id && item.variant === product.variant);
            // Si el producto ya existe, incrementa la cantidad en 1
            if (exists) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };
    /* Función para eliminar un producto del carrito */
    const removeFromCart = productId => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };
    /* Proveedor del contexto que envuelve a los hijos */
    return (

        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

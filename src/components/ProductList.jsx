import React, { useEffect, useState } from 'react';
import  fetchProducts  from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <section>
            <h2>Produtos disponibles</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '200px' }}>
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductList;

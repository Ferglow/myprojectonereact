import React, { useEffect, useState, useContext } from 'react';
import fetchProducts from '../services/api';
import { CartContext } from '../context/CartContext';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button
} from '@mui/material';

/* Componente para mostrar la lista de productos */
const ProductList = () => {
    const [products, setProducts] = useState([]);
    /* Contexto del carrito permite interactuar con el carrito de compras */
    const { addToCart } = useContext(CartContext);

    const [loading, setLoading] = useState(true);
    /* Carga los productos desde la API */
    /* Carga los productos al montar el componente */

    useEffect(() => {
        const loadProducts = async () => {
            try {
                // Llama a la API para obtener los productos
                const data = await fetchProducts();
                // Actualiza el estado con los productos obtenidos
                setProducts(data);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            } finally {
                setLoading(false);
            }
        };
        // Llama a la función para cargar los productos
        loadProducts();
    }, []);

    if (loading) {
        return <Typography variant="h6">Cargando productos...</Typography>;
    }
    /* Renderiza la lista de productos */
    return (
        <Grid container spacing={3} sx={{ padding: 2 }}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.title}
                            sx={{ objectFit: 'contain', padding: 2 }}
                        />
                        <CardContent>
                            <Typography variant="h6">{product.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" 
                            onClick={() => addToCart(product)}
                            aria-label={`Agregar ${product.title} al carrito`}
                            >Agregar al carrito</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;

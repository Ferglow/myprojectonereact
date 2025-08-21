import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Divider,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

/* Componente para mostrar el carrito de compras */
const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    /* Carga los productos del carrito al montar el componente */

useEffect(() => {
  console.log('Carrito actualizado:', cartItems);
}, [cartItems]);

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>Carrito de compras</Typography>
            {/* Muestra los productos en el carrito */}
            {cartItems.length === 0 ? (
                <Typography>No hay productos en el carrito.</Typography>
            ) : (
                <List>
                    {cartItems.map(item => (
                        <React.Fragment key={item.id}>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={`${item.title} x${item.quantity}`}
                                    secondary={`$${item.price}`}
                                />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            )}
        </Box>
        
    );
    
};



export default Cart;

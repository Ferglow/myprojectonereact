/* se importa React y el archivo CSS del encabezado */
import React from "react";
import "../styles/Header.css";
/* se importan los componentes de Material-UI */
import { AppBar, Toolbar, Typography, Button, Box, InputBase } from '@mui/material';

// Componente del encabezado
const Header = () => {
  return (
    <AppBar position="static">
      {/* Contenedor del encabezado */}
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Título de la aplicación */}
        <Typography variant="h6">ElectroSalud</Typography>
        {/* Contenedor de los botones de navegación */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="/">Inicio</Button>
          <Button color="inherit" href="/cart">Carrito</Button>
        </Box>
        {/* Campo de búsqueda */}
        <InputBase
          placeholder="Buscar productos..."
          sx={{ backgroundColor: 'white', padding: '0.2rem 0.5rem', borderRadius: '1', fontSize: '0.9rem' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

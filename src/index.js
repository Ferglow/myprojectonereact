/* Son importaciones importantes para la aplicación, para poder inicializarla correctamente y poder utilizar sus funcionalidades */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Se crea la raíz de la aplicación y se renderiza el componente App */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Se llama a la función reportWebVitals para medir el rendimiento de la aplicación */
reportWebVitals();
